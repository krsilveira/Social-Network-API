//GLOBAL VARIABLE

const { Schema, model } = require('mongoose');


//  Student Model

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
      max_length: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
      max_length: 50, 
    },
    thoughts: [ 
    {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
  ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      // getters: true,
    },
    id: false,
  }
);



// friend count set

userSchema
  .virtual('friendCount')
  .get( function () { return this.friends.length });


const User = model('user', userSchema);


//module export
module.exports = User;
