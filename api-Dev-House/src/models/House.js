import { Schema, model } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();



const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  date : { type : Date, default: Date.now },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  
},{
  toJSON: {
    virtuals: true
  },
  timestamps: true
});
const api_url = process.env.API_URL ?? 'http://localhost:3333/';
console.log('api_url',api_url);
HouseSchema.virtual('thumbnail_url').get(function(){
  return `${api_url}files/${this.thumbnail}`;
})

export default model('House', HouseSchema);