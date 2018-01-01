'use strict'

var apiKey = 'APIKEY';
var api = 'https://maps.googleapis.com/maps/api/geocode/json';

var box = document.getElementById('zipcode');
box.addEventListener('keypress', findLocation);

function findLocation(){

	var zipcode = document.getElementById('zipcode').value;
	var url = api+'?address='+zipcode+'&key='+apiKey;

	//Fetch API
	fetch(url).then(function(response){
		if(!response.ok){
			throw Error(response.status);
		}
		return response.json();
	}).then(function(response){
		handleResponse(response);
	}).catch(function(error){
		console.log("XHR Failed");
	});
}
	function handleResponse(data){
		outputLocation(data);
	}

function outputLocation(data){
	var location = document.getElementById('location');
	var geo = data.results[0].geometry.location;
	location.innerHTML = "<p>"+data.results[0].formatted_address+"</p>"+"<p>Lattitude: "+geo.lat+"<br/>"+"Longitude: "+geo.lng+"</p>";
}