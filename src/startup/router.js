/**
 * @name: router.js 
 * @description: defined all the endpoints (URIs) respond to client requests
 */

const router = require("express").Router();
const hompageRoute = require("../routes/hompageRoute");


router.use("/homepage", hompageRoute);

router.use("/healthcheck", (req, res) => {
  res.status(200).send("Crimewiz Server is up and running!");
});

module.exports = router;
