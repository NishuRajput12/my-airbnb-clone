const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview=async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success",
        "New Review Add!"
    );
    res.redirect(`/listings/${req.params.id}`);
}

module.exports.deleteReview=async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success",
        " Review Deleted!"
    );
    res.redirect(`/listings/${id}`);
};