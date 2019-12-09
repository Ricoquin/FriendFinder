/* Your apiRoutes.js file should contain two routes:
A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

var surveyData = require('../data/friends');

module.exports = function (app) {

  //API GET requests; handles when users visit a page; when a link is visited the user is shown a JSON of table data

  app.get('', (req, res) => {
    res.json(surveyData);
  });

  //API POST requests; handles when users submit a form and pushes the data to the appropriate array in friends.js
  // user submits form -> server -> data to surveyData array

  app.post('', (req, res) => {

  });

}


//example from hotrestaurant solved




app.post("/api/tables", function (req, res) {
  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body parsing middleware
  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
  } else {
    waitListData.push(req.body);
    res.json(false);
  }
});

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

app.post("/api/clear", function (req, res) {
  // Empty out the arrays of data
  tableData.length = 0;
  waitListData.length = 0;

  res.json({
    ok: true
  });
});