let dotenv = require('dotenv')
dotenv.config()
module.exports = {
    solr_port : process.env.SOLR_PORT,
    solr_core : process.env.SOLR_CORE,
    solr_host : process.env.SOLR_HOST,
    api_end_point: process.env.API_END_POINT
}
