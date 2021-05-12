let raceNumber = Math.floor(Math.random() * 1000);
earlyRegistration = true
runnerAge = 44
adultOrChild = ''

switch(runnerAge) {

}
	case earlyRegistration && runnerAge > 18:
		adultOrChild = 'Adult'
		raceNumber +== 1000
		console.log(`Runner number ${raceNumber}, you will be running at 9:30AM, in the ${adultOrChild} class.`)
		break
	case !earlyRegistration && runnerAge > 18:
		adultOrChild = 'Adult'
		raceNumber +== 1000
		console.log(`Runner number ${raceNumber}, you will be running at 11:00AM, in the ${adultOrChild} class.`)
		break
	case runnerAge < 18:
		adultOrChild = 'Child'
		console.log(`Runner number ${raceNumber}, you will be running at 12:30PM in the ${adultOrChild} class.`)
		break
	case runnerAge === 18:
		console.log(`Runner number ${raceNumber}, please see the front desk for more info.`)
	default:
		console.log('Are you here to sign up for a race?')