const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// module.exports.index=async (req, res) => {
//     const allListing = await Listing.find({});
//     res.render("listings/index", { allListing });
//};

module.exports.renderNewForm=(req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path:"author",
          },
    })
    .populate("owner");//owner ka name display hoga
    if( !listing){
        req.flash("error", "The listing you requested does not exist.");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });

};

module.exports.createListing=async (req, res, next) => {
 let response= await  geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
        .send()
        
    let url=req.file.path;
    let filename = req.file.filename;
    const newListing =new Listing(req.body.listing);
//    console.log(req.user);
    newListing.owner =req.user._id;
    newListing.image={url,filename};
   // console.log(newListing);
    newListing.geometry=response.body.features[0].geometry;
    let saveListing=await newListing.save();
    console.log(saveListing);
    req.flash("success",
        "New Listing Created!"
    );
    res.redirect("/listings");


};
module.exports.EditListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if( !listing){
        req.flash("error",
            "Listing you requested for does not exist ! "
        );
        return res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/h_300,w_250");
    res.render("listings/edit.ejs", { listing,originalImageUrl });
};

module.exports.UpdateListing=async (req, res) => {
    let { id } = req.params;
    let listing= await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if( typeof req.file !=="undefined"){
    let url=req.file.path;
    let filename = req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }
    req.flash("success",
        " Listing Updated!"
    );
    res.redirect("/listings");

};

module.exports.DeleteListing=async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id, { ...req.body.listing });
    console.log(deleteListing);
    req.flash("success",
        " Listing Deleted!"
    );

    res.redirect("/listings");
}

module.exports.index = async (req, res) => {
    const { q, category } = req.query;
    let allListing;

    // Make category lowercase
    const cat = category ? category.toLowerCase() : null;

    const filters = ["trending", "room", "cities", "mountain","castles","domes","camping", "beach","city","pets","nature","lakes","snow"];

    if (q) {
        // Search logic
        allListing = await Listing.find({
            $or: [
                { title: { $regex: q, $options: "i" } },
                { location: { $regex: q, $options: "i" } },
                { country: { $regex: q, $options: "i" } },
            ]
        });
    } else if (cat) {
        // Filter by category
        allListing = await Listing.find({ category: cat });
    } else {
        allListing = await Listing.find({});
    }

    res.render("listings/index", { allListing, filters, activeCategory: cat || "" });
};
