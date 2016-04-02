'use strict';

var url = require('url');
var Feed = require('./FeedService');

module.exports.addFeed = function addFeed (req, res, next) {
  Feed.addFeed(req.swagger.params, res, next);
};

module.exports.delFeed = function delFeed (req, res, next) {
  Feed.delFeed(req.swagger.params, res, next);
};

module.exports.listFeeds = function listFeeds (req, res, next) {
  Feed.listFeeds(req.swagger.params, res, next);
};
