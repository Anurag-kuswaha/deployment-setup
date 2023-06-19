/**
 * @name: homepage.js 
 * @description: controller used for the business logics
 */


const {getWelcomeMessage} = require("../services/homepage");

exports.getHomepageDetails = async (req, res) => {
    const welcomeMessageText = await getWelcomeMessage();
    console.log('message is ', welcomeMessageText);
    return res.status(200).send(welcomeMessageText);
};
  
  