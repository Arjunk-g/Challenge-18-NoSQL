const { Schema, model, Types, default: mongoose } = require("mongoose");
// const moment = require('moment');
const ObjectId = Schema.ObjectId;

const thoughtMod = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
      },
      createdAt: {
        type: Date,
        default: Date.now,
        max_length: 50
      },
      username: {
        type: String,
        require: true
    },
    
    reactions: [reactions]
    },
    {
      toJSON: {
        getters: true,
        virtuals: true
    
      },
      id: false
    }
  );


//make the comments/reactions here 
/*
This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
*/

const reactions = new Schema(
    {
        reactionID: {
          type: ObjectId,
          default: () => mongoose.Types.ObjectId
          
        },
      reactionBody: {
        type: ObjectId,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        require: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      toJSON: {
        getters: true,
        virtuals: true
    
      },
      id: false
    }
  );




  thoughtMod.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  
  const Thought = model('Thought', thoughtMod);
  
  module.exports = Thought;