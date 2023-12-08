// Create web server

var express = require('express');
var router = express.Router();

var commentModel = require('../models/commentModel');

/* GET comments listing. */
router.get('/', function(req, res, next) {
  commentModel.find({}, function(err, comments) {
    if (err) {
      console.log(err);
    } else {
      res.send(comments);
    }
  });
});

/* POST comments listing. */
router.post('/', function(req, res, next) {
  var comment = new commentModel({
