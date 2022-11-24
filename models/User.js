const { Schema, trusted } = require("mongoose");

const userMod = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        max_length: 50,
      },
      thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
    },
    {
      toJSON: {
        getters: true,
        virtuals: true
    
      },
      id: false
    }
  );

  userMod.virtual('friendsCount').get(function () {
    return this.friend.length;
  });
  
  const User = model('User', userMod);
  
  module.exports = User;
  