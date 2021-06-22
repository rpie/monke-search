/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import mongoose from "mongoose";
import env from "dotenv";

// Variables
env.config();

const UserSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  discriminator: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  usernames: {
    type: Array,
    required: true
  },
  avatars: {
    type: Array,
    required: true
  },
  guilds: {
    type: Array,
    required: true
  },
  presences: {
    type: Array,
    required: true
  },
  last_seen: {
    type: Number,
    required: true
  }
}, {
  versionKey: false
});

export default mongoose.model(process.env.MONGO_COLLECTION, UserSchema);