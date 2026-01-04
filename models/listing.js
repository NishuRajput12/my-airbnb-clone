const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review=require("./review.js");

const listingSchema = new Schema({
    title:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    image: {
        url: String,
        filename:String,
      },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    reviews:[
        {
          type:Schema.Types.ObjectId, 
          ref:"Review" 
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry:
        {
            type: {
              type: String, // Don't do `{ location: { type: String } }`
              enum: ['Point'], // 'location.type' must be 'Point'
              required: true
            },
            coordinates: {
              type: [Number],
              required: true
            },
          },
          category: {
            type: String,
            enum: ["trending", "room", "cities", "mountain","castles","domes","camping", "beach","city","pets","nature","lakes","snow"],
            
        },
          
});

listingSchema.post("findOneAndDelete",async(listing)=>{
if(listing){
    await Review.deleteMany({_id : {$in:listing.reviews}});
}
});
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;