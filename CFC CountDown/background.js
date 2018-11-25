chrome.browserAction.onClicked.addListener(function (tab) {
	
	var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://api.football-data.org/v1/teams/61/fixtures", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
		
			var response = JSON.parse(xhr.responseText);
			var fixtures = response.fixtures;
			
			loop :
			for (var i = 0; i < fixtures.length; i++) {
				var match = fixtures[i];
				if (match.status === 'SCHEDULED' || match.status === 'TIMED') {
					var hTeam = match.homeTeamName;
					var aTeam = match.awayTeamName;
					var timeStamp = new Date(match.date);
					var matchDesc = hTeam.concat(" Vs ").concat(aTeam).concat("\nOn ").concat(monthNames[timeStamp.getMonth()]). concat(" ").concat(timeStamp.getDate()).concat(", ").concat(timeStamp. getFullYear()).concat("\nAt ").concat(timeStamp.getHours()).concat(":").concat(timeStamp.getMinutes());
					alert(matchDesc);
					break loop;
				}
			}
		
		}
	}
	xhr.send();
});