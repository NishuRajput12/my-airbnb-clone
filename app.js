require('dotenv').config();
console.log(process.env.SECRET) 
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const session=require("express-session");
const MongoStore = require('connect-mongo').default;
const flash=require("connect-flash");
const Review = require("./models/review.js");
// const review = require("./models/review.js");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const listingsRouter=require("./routes/listing.js");
const reviewsRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// const MONGO_URL = "mongodb://127.0.0.1:27017/Airbnb";
 const dbUrl=process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
}

main()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
    const store = MongoStore.create({
        mongoUrl: dbUrl,
        crypto: {
            secret: process.env.SECRET,
        },
        touchAfter: 24 * 3600 // seconds
    });
    
    store.on("error", (err) => {
        console.log("ERROR IN MONGO SESSION STORE", err);
    });
    
    const sessionOptions = {
        store,
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
        }
    };
    
    app.use(session(sessionOptions));
    
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser( User.deserializeUser());

// app.get("/demoUser",async(req,res)=>{

//     let fakUser=new User({
//         email:"student@gmail.com",
//         username:"student-sigma",
//     });
//    let newUser=await User.register(fakUser,"hello");
//    res.send(newUser);

// })

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;

   // console.log(res.locals.success);
    next();
}
)


app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);

// Catch-all route (regex style)
app.all(/.*/, (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    // res.send("Something went Wrong !");
    let { statusCode = 500, message = "Something went wrong!" } = err;
    // res.status(statusCode).send(message);
    res.render("error.ejs", { message });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


