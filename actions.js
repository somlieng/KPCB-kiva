function apiCall() {
    	var http = require('http');

		http.get('http://data.undp.org/resource/sf29-qtcx.json', function(response) {
		    var body = '';
		    response.on('data', function(d){
		        body += d;
		    });
		    response.on('end', function() {
		        var parsed = JSON.parse(body);

		        for(i=1;i<parsed.length;i++){
		        	console.log(parsed[i]["country"]);
		        }

		        //console.log(parsed[207]["country"]);
		    });
		});

    }

google.load("visualization", "1", {packages:["geochart"]});
      //google.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
      	var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }

$(document).ready(function(){

	$( "#HDIC" ).click(function() {
	
	alert("hello")

	drawRegionsMap();

	});

})

function a(args){
    b.apply(this, arguments);
}
function b(args){
   alert(arguments[0]); //arguments[0] = 1, etc
}

$("#HDIT").click(function(){
	a(1,2,3);
});		

//console.log("Hello World");
//var test = new apiCall();

