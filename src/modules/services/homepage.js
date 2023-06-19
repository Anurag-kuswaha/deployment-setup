/**
 * @name: homepage.js 
 * @description: homepage service file
 */

const welcomeMsg = 'Hey! welcome to the Crimewiz Website';
exports.getWelcomeMessage = async () => {
  return { status: 'OK', statusCode: 200, msg: welcomeMsg } ;
};

