// eslint-disable-next-line strict
'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: String, },
  category: { type: String, },
  display_name: {type: String, },
  description: { type: String, }
});

module.exports = mongoose.model('product', product);