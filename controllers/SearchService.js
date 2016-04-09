'use strict';
var elasticsearch = require('elasticsearch');
var bodyParser = require('body-parser');


var client = new elasticsearch.Client({
  // host: '192.168.99.100:9200',
  host: ['es-data-2:9200','es-data-4:9200','es-data-3:9200','es-data-1:9200'],
  log: 'trace'
});

exports.search = (args, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
  let query = args.body.value.request;
  console.log(query);

  if(query) {
    client.search({
      index: "wtl",
      type: "articles",
      body: query
    }).then((resp) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(resp));
    },
    (err) => {
      res.end(JSON.stringify(err.message));
      console.trace(err.message);
    });
  }
  else {
    res.end();
  }
}
