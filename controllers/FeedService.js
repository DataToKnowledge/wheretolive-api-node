'use strict';

exports.addFeed = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AddFeed)
  **/
  
  
  var examples = {};
  examples['application/json'] = "aeiou";
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.delFeed = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (DelFeed)
  **/
  
  
  var examples = {};
  examples['application/json'] = "aeiou";
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.listFeeds = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = 1.3579000000000001069366817318950779736042022705078125;
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

