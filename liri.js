var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

var spotifyObject;
//var params = {q: 'MisleyTest'};
//client.get('search/tweets', params, function(error, tweets, response) {
 // if (!error) {
  //	console.log(tweets.statuses);
 // }
//});

//var Spotify = require('node-spotify-api');
 
//var spotify = new Spotify({
//  id: "f29652ed86a3463798b93acdd075bcb7",
//  secret: "e6ebd63ab0fe4b5486b314544692266b"
//});
 
//spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  //if (err) {
    //return console.log('Error occurred: ' + err);
  //}
 
  //spotifyObject = data.tracks.items; 
  //console.log(spotifyObject.album.artists);
//});
var movieObject;

var request = require('request');
request('http://www.omdbapi.com/?apikey=40e9cece&t=lord+of+the+rings', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received // Print the HTML for the Google homepage. 
  movieObject = (JSON.stringify(body));
  console.log(movieObject.results.Title);
});


 