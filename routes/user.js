const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const usersController=require("../controllers/users.js");

//------------------------ signup-----------
router.route("/signup")
.get(usersController.renderSignupForm)
.post(
  wrapAsync(usersController.signup)
);
//------------------------ login------------
router.route("/login")
.get(usersController.renderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  usersController.login
);

//------------------------ logout------------
router.get("/logout",usersController.logout );
module.exports = router;


const { isLoggedIn } = require("../middleware.js"); 

router.post(
  "/wishlist/toggle/:id",
  isLoggedIn,
  wrapAsync(usersController.toggleWishlist)
);
