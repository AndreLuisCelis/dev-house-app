import { Schema, model } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();



const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
});
const api_port = process.env.API_PORT ?? '3333';
HouseSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:${api_port}/files/${this.thumbnail}`;
})

export default model('House', HouseSchema);