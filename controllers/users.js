const User = require("../models/user");
module.exports.renderSignupForm=(req, res) => {
    res.render("users/signup.ejs");
};  
module.exports.signup=async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeUser = await User.register(newUser, password);
      console.log(registeUser);
      req.login(registeUser,(err)=>{
        if(err){
            return next(err);
        }
      req.flash("success", "Successfully signed up!");
      res.redirect("/listings");
      })
     
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/listings");
    }
  };

  module.exports.renderLoginForm= (req, res) => {
    res.render("users/login.ejs");
  };
  module.exports.login=async (req, res) => {
    req.flash("success", "Successfully Login!");
    //res.redirect("/listings");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
    //res.redirect(req.session.redirectUrl);
  };


  module.exports.logout=(req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Successfully logout");
      res.redirect("/listings");
    });
  }

 
  module.exports.toggleWishlist = async (req, res) => {
    const listingId = req.params.id;
    const userId = req.user._id; // logged-in user
  
    try {
      const user = await User.findById(userId);
  
      const index = user.wishlist.indexOf(listingId);
      let added;
      if (index > -1) {
        // Remove from wishlist
        user.wishlist.splice(index, 1);
        added = false;
      } else {
        // Add to wishlist
        user.wishlist.push(listingId);
        added = true;
      }
  
      await user.save();
  
      res.json({ added, total: user.wishlist.length }); // Return status + total count
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  