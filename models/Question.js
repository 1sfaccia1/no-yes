const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text:{
    type: String,
    required: true,
    min: 20,
    max: 250
  },
  yeses: [
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  }
],
noes: [
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  }
],
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = Question = mongoose.model('question', QuestionSchema);
