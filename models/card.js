const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    default: [],
  }],
  link: {
    type: String,
    required: true,
  },
  owner: {
    type: Object,
    required: true,
  },
});

module.exports = model('card', cardSchema);
