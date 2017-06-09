var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

var query;
var spotifyObject;
var action = process.argv[2];
var item = process.argv[3];
if(action == "my-tweets"){
	var params = {q: 'MisleyTest'};
	client.get('search/tweets', params, function(error, tweets, response) {
	  if (!error) {
	  	for(i=0; i < 14; i++){
	  		console.log("Tweet: " + tweets.statuses[i].text);
	  		console.log("Date Tweeted: " + tweets.statuses[0].created_at)
	  	}
	  }
	});
}	

if(action == "spotify-this-song"){
	var Spotify = require('node-spotify-api');
	 
	var spotify = new Spotify({
	  id: "f29652ed86a3463798b93acdd075bcb7",
	  secret: "e6ebd63ab0fe4b5486b314544692266b"
	});
	if(typeof item == "string" || item instanceof String){
		query = item;
	}else{
		query = "The Sign";
	}
	spotify.search({ type: 'track', query }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	  spotifyObject = (data);
	  console.log("Artist: " + spotifyObject.tracks.items[0].artists[0].name);
	  console.log("Song Title: " + spotifyObject.tracks.items[0].name);
	  console.log("Preview Link: " + spotifyObject.tracks.items[0].preview_url);
	  console.log("Album: " + spotifyObject.tracks.items[0].album.name);
	});
}	

var movieObject;
if(action == "movie-this"){
	if(typeof item == "string" || item instanceof String){
		input = item;
	}else{
		input = "Mr.Nobody";
	}
	var lowercase = input.toLowerCase();
	var movie = lowercase.replace(/ /g, "+");
	var request = require('request');
	request('http://www.omdbapi.com/?apikey=40e9cece&t=' + movie, function (error, response, body) {
	  //console.log('error:', error); // Print the error if one occurred 
	  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received /
	  movieObject = (JSON.parse(body));
	  console.log("Title: " + movieObject.Title);
	  console.log("Year: " + movieObject.Year);
	  console.log("IMDB Rating: " + movieObject.imdbRating);
	  console.log("Country: " + movieObject.Country);
	  console.log("Language: " + movieObject.Language);
	  console.log("Plot: " + movieObject.Plot);
	  console.log("Actors: " + movieObject.Actors);
	  console.log("www.rottentomatoes.com");

	});
}

if(action == "do-what-it-says"){
	var content;
	var fs = require("./random.txt")
// First I want to read the file
	fs.readFile('./random.txt', function read(err, data) {
	    if (err) {
	        throw err;
	    }
	    content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
	});

	function processFile() {
	    console.log(content);
	}

}


 