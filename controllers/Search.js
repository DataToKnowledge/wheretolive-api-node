'use strict';

var url = require('url');
var Search = require('./SearchService');

module.exports.search = function search (req, res, next) {
  Search.search(req.swagger.params, res, next);
};
