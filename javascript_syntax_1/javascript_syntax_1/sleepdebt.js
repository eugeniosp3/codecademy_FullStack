let daysList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const getSleepHours = day => {
  hoursSlept = 0
  switch(day.toLowerCase()) {
    case 'monday':
      return hoursSlept = 6
     case 'tuesday':
      return hoursSlept = 4
    case 'wednesday':
      return hoursSlept = 10
    case 'thursday':
      return hoursSlept = 8
   case 'friday':
      return hoursSlept = 8
    case 'saturday':
      return hoursSlept = 12
   case 'sunday':
      return hoursSlept = 5                               
  }
}

console.log(getSleepHours('tuesday')
)


const getActualSleepHours = () => {
let actualHoursSlept = 0
for (d of daysList) {
  actualHoursSlept += getSleepHours(d)
}

return actualHoursSlept
}

let idealHours = 60
let sleepDebt = idealHours - getActualSleepHours()
console.log(`You owe yourself ${sleepDebt} hours of sleep.`)