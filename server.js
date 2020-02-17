// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

var AnchormanArray = [
  {
    name: 'Brian Fantana',
    gif: 'https://media.giphy.com/media/lKXd9sYM5dI9W/giphy.gif',
    scores: ['2', '1', '3', '4', '5', '1', '4', '5', '4', '1']
  },
  {
    name: 'Veronica Corningstone',
    gif:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpghttps://media.giphy.com/media/QtwzT6KATBrOM/giphy.gif',
    scores: ['3', '1', '4', '2', '2', '1', '5', '3', '4', '1']
  },

  {
    name: 'Ron Burgandy',
    gif:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpghttps://media.giphy.com/media/Ph5URHO3HY2Dm/giphy.gif',
    scores: ['5', '1', '3', '4', '5', '1', '4', '5', '3', '1']
  },
  {
    name: 'Brick Tamlin',
    gif: 'https://media.giphy.com/media/4u31bWDYmhw5O/giphy.gif',
    scores: ['2', '1', '4', '2', '5', '1', '2', '5', '2', '1']
  },
  {
    name: 'Champ Kind',
    gif: 'https://media.giphy.com/media/5ainowaqygvf2/giphy.gif',
    scores: ['3', '1', '4', '4', '1', '1', '2', '3', '4', '4']
  },
  {
    name: 'Ed, Harken',
    gif: 'https://media.giphy.com/media/4zJ37APZuSjyE/giphy.gif',
    scores: ['3', '1', '4', '4', '1', '1', '2', '3', '4', '4']
  },
  {
    name: 'Wes Mantooth',
    gif: 'https://media.giphy.com/media/iPlugtf8czP5m/giphy.gif',
    scores: ['3', '1', '4', '4', '1', '1', '2', '3', '4', '4']
  },
  {
    name: 'Chani',
    gif: 'https://media.giphy.com/media/Gnm3iMwJAeZoc/giphy.gif',
    scores: ['3', '1', '4', '4', '1', '1', '2', '3', '4', '4']
  },
  {
    name: 'Jack Lime',
    gif:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAqhttps://media.giphy.com/media/8hUAHqXeRL0Ws/giphy.gif7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
    scores: ['3', '1', '4', '4', '1', '1', '2', '3', '4', '4']
  }
];

// Sets up the Express app
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, 'survey.html'));
});

app.post('/api/friends', function(req, res) {
  //handle the post request
  console.log(req.body);
  var userData = req.body;

  //new array
  var friendArray = [];

  //compare userData with AnchormanArray
  console.log(AnchormanArray.length);

  for (i = 0; i < AnchormanArray.length; i++) {
    //looping thorugh each character
    console.log(AnchormanArray[i].name);

    var friendCounter = 0;
    for (var j = 0; j < AnchormanArray[i].scores.length; j++) {
      //this is looping through each scores array per charcter
      console.log(AnchormanArray[i].scores[j]);

      //COMPARE YOUR SCORES VERSUS EACH CHARACTER SCORES
      if (userData.scores[0] == AnchormanArray[i].scores[j]) {
        friendCounter++;
      }
    }

    if (friendCounter > 5) {
      //count them as a friend
      //create up top and add this person to that array.

      friendArray.push(AnchormanArray[i].name);
    }
  }

  return res.json(friendArray);
  //PULL IN AnchormanArray
});

// LISTENER //
app.listen(PORT, function() {
  console.log('Server is listening on PORT: ' + PORT);
});
