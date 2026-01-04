const mongoose=require('mongoose');
const initData=require("./data.js");
const Listing=require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/Airbnb";
async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

    const initDb=async()=>{
      await  Listing.deleteMany({});
      initData.data=initData.data.map((obj)=>({
        ...obj,
        owner:"693c3a2c842de1b6216e429c",
      }));
      await Listing.insertMany(initData.data);
      console.log("Data was initilized");
    }
    initDb();