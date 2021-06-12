let express = require('express')
let bodyParser = require('body-parser')
let helmet = require('helmet')
let apiRoutes = require('./endpoints/routes')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001


app.use(helmet())
app.use(bodyParser.urlencoded({
     extended:true
}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.resolve(__dirname, '../client/build')))

// All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.use('/api', apiRoutes)

app.use(express.static(__dirname + '/assets'))

app.listen(PORT, function () {
    console.log("Running My Search Engine on port " + PORT);
})
