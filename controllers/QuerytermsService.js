'use strict';

exports.addQueryTerms = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AddTerms)
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

exports.delQueryTerms = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (DelTerms)
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

exports.listQueryTerms = function(args, res, next) {
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

