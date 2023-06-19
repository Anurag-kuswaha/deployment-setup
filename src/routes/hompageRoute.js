/**
 * @name: homepageRoute.js 
 * @description: route for homepage endpoints
 */


const router = require("express").Router();
const homepageController = require("../modules/controllers/homepage.js");
// const { verifyToken } = require("../middlewares/auth");
// const authorize = require("../middlewares/authorizer");

// respond with "welcome message" when a GET request is made to the homepage
router.get("/", homepageController.getHomepageDetails
);

module.exports = router;
