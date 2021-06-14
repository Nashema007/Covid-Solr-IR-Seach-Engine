
let router = require('express').Router()
let solr = require('solr-client')
const { solr_port, solr_core, solr_host } = require('../../config.js')
// client connects to solr host
var client = solr.createClient({
	host : solr_host,
	port : solr_port,
	core : solr_core
});


router.get("/", (req, res) => {
    let q = req.query.q
    var query = null
    if (q == " "){
    // search query (DixMax)
    query= client.createQuery()
      .q( '*:*' )
      .dismax()
      .qf( {
        title_t: 0.2,
        description_t: 3.3
      } )
      .mm( 2 )
      .start( 0 )
      .rows( 20 );
    }
    else{
    // search query (DixMax)
    query = client.createQuery()
    .q({ 'body_text.text' : q})
    .start(0)
    .rows(20);
    }

  //run search
  client.search( query,( err, obj ) =>{
    if ( err ) {
      res.send(err)
    } else {
      res.send(obj.response.docs)
    }
  });
  });

  router.get("/doc/", (req, res) => {
    let q = req.query.q
    // search query (DixMax)
    var query = client.createQuery()
    .q({ 'paper_id' : q})
    .start(0)
    .rows(20);
  //run search
  client.search( query,( err, obj ) =>{
    if ( err ) {
      res.send(err)
    } else {
      res.send(obj.response.docs)
    }
  });
  });
  
 
module.exports = router