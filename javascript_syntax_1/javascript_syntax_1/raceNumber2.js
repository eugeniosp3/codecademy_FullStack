let raceNumber = Math.floor(Math.random() * 1000);
earlyRegistration = false
runnerAge = 44
adultOrChild = ''

if (runnerAge > 18 && earlyRegistration) {
  adultOrChild = 'Adult'
  raceNumber += 1000
  console.log(`Runner number ${raceNumber}, you will be running at 9:30AM, in the ${adultOrChild} class.`)
}
else if (runnerAge > 18 && !earlyRegistration) {
	adultOrChild = 'Adult'
	raceNumber += 1000
	console.log(`Runner number ${raceNumber}, you will be running at 11:00AM, in the ${adultOrChild} class.`)

}
else if (runnerAge === 18) {
    console.log('Go to registration desk!')
}

else if (runnerAge < 18) {
	adultOrChild = 'Child'
	console.log(`Runner number ${raceNumber}, you will be running at 12:30PM in the ${adultOrChild} class.`)
  }
 
 
