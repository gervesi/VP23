exports.dateNowET = function(){
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktober", "november", "december"];
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let completeDate = dateNow + "." + (monthNow + 1) + "." + yearNow;
	return completeDate;
	return timeNow.getDate() + ". " + monthNameET(timeNow.getMonth)
}

//console.log(monthNow);
//console.log("Täna on: " + dateNow + "." + (monthNow + 1) + "." + yearNow);
//console.log("Praegu on: " + hoursNow + minutesNow + secondsNow);
//monthNameET[0];
//monthNameET[timeNow.getMonth()];