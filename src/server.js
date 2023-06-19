/**
 * @name: Server.js 
 * @description: startup file
 */
const app = require("./app");


app.listen(process.env.PORT || 3001, () =>
  console.log(`Crimewiz backend server listening on port ${process.env.PORT || 3001}`)
);
