/*---------------------------------------------------------
  Configuration
---------------------------------------------------------*/

// Set this to the server side language you wish to use.
var lang = 'php'; // options: lasso, php, py

// Set this to the directory you wish to manage.

// var site_url = window.location;
var current_url = String(window.location.hostname);
var productionURL = ""; // no 'http://'
var developmentURL = "localhost";
var uploadFolder = productionURL+"/";

// alert(current_url+'/assets/');

// Deployment specific path issues... a little annoying to deal with.
var fileRoot = '/webroot/';
if(current_url == 'localhost') {
	fileRoot = '/path/to/webroot/';	
}
if(current_url == productionURL) {
	fileRoot = 'webroot/';	
}
// var fileRoot = BASE_HREF;

// Show image previews in grid views?
var showThumbs = true;
