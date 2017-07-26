var work = {
	jobs: {
	"locations": 
	[
		{
			"name": "Bellevue, WA",
			"income-tax": "0%",
			"clients": [
				"Bungie",
				"Expedia",
				"T-Mobile"
			]
		},
		{
			"name": "Houston, TX",
			"income-tax": "0%",
			"clients": [
				"Phillips 66",
				"Sysco",
				"Baker Hughes"
			]
		},
		{
			"name": "Moline, IL",
			"income-tax": "3.75%",
			"clients": [
				"Deere & Co."
			]
		},
		{
		"name": "Palo Alto, CA",
			"income-tax": "13.3%",
			"clients": [
				"Tesla",
				"Pinterest",
				"Waze"
			]
		},
		{
			"name": "Plano, TX",
			"income-tax": "0%",
			"clients": [
				"AT&T",
				"FedEx",
				"Infosys"
			]
		},
		{
			"name": "Milwaukee, WI",
			"income-tax": "7.65%",
			"clients": [
				"Northwestern Mutual",
				"Aurora Health Care",
				"ManpowerGroup"
			]
		},
		{
			"name": "Charlotte, NC",
			"income-tax": "5.75%",
			"clients": [
				"Bank of America",
				"Bayer",
				"BB&T"
			]
		}
	]
}
};


var i = 0;
work.jobs.locations.forEach(function (location) {

	var income = "<p>income</p>";
	
	$("#city > article:nth-child(" + i + ")").append(income.replace("income", location["income-tax"]));

});

$("#mapDiv").append(googleMap);
