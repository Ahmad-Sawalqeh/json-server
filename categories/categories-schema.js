// eslint-disable-next-line strict
'use strict';

const mongoose = require('mongoose');

const category = mongoose.Schema({
  name: { type: String, },
  display_name: {type: String, },
  description: { type: String, }
});

module.exports = mongoose.model('product', category);