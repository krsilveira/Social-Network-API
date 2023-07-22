// GLOBAL VARIABLES
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const timeFormatter  = require('../utils/timeFormatter');


// Course Model

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(), 
      get: createdTime => timeFormatter(createdTime)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ reactionSchema ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);


// friend count set
thoughtSchema
  .virtual('reactionCount')
  .get( function () { return this.reactions.length });



const Thought = model('thought', thoughtSchema);


//module eexport
module.exports = Thought;
