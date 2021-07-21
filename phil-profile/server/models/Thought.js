const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    minlength: 1,
    maxlength: 1000,
    trim: true,
  },
  
  aboutMeText: {
    type: String,
    minlength: 1,
    maxlength: 1000,
    trim: true,
  },
  
  activeText: {
    type: String,
    minlength: 1,
    maxlength: 1000,
    trim: true,
  },

  pastTimeText: {
    type: String,
    minlength: 1,
    maxlength: 1000,
    trim: true,
  },
  



});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
