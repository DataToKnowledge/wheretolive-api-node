'use strict';

var url = require('url');
var Queryterms = require('./QuerytermsService');

module.exports.addQueryTerms = function addQueryTerms (req, res, next) {
  Queryterms.addQueryTerms(req.swagger.params, res, next);
};

module.exports.delQueryTerms = function delQueryTerms (req, res, next) {
  Queryterms.delQueryTerms(req.swagger.params, res, next);
};

module.exports.listQueryTerms = function listQueryTerms (req, res, next) {
  Queryterms.listQueryTerms(req.swagger.params, res, next);
};
