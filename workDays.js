// Calculate Workdays/Workhours between two dates (Optional: Subtract Holidays!)

function workDays(sDate,eDate,hdays) { // Formats: Dates("YYYY-MM-DD") / Holidays(Sum(Numbers))
	var [s,e,a,r] = [new Date(sDate), e = new Date(eDate), [], 0]
	while (s <= e) {
		if (s.getDay() > 0 && s.getDay() < 6) {a.push(s)}
		s.setDate(s.getDate()+1)
	}
	r = a.length - (hdays == null ? 0 : hdays)
	console.log(`${r} workDays => ${r*8} workHours`)
	return [r,r*8]
}
