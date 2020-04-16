//const fetch = require("node-fetch");

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "85387cb1fbmsh432cb0326acc34ap14b64bjsn867db402334d"
	}
})
.then(response => {
    response.json().then(text => {
        var countryArray = text.countries_stat;
        var table = document.getElementById("output");
        for(let i = 1; i < countryArray.length; i ++){
            var row = table.insertRow(i);
            var country = row.insertCell(0);
            var cases = row.insertCell(1);
            var death = row.insertCell(2);
            var recover = row.insertCell(3);
            country.innerHTML = countryArray[i].country_name;
            cases.innerHTML = countryArray[i].cases;
            death.innerHTML = countryArray[i].deaths;
            recover.innerHTML = countryArray[i].total_recovered;
        }
    })   
})
.catch(err => {
	console.log(err);
});

