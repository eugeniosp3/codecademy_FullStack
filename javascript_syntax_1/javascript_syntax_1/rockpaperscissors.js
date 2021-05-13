let computerCounter = 0
let userCounter = 0
function scoreBoard() {
console.log(`Computer: ${computerCounter}, User: ${userCounter}`)

}

const getUserChoice = userInput => {

userInput = userInput.toLowerCase()
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
  console.log(`User chooses ${userInput}`)
  return userInput
}
else if (userInput === 'bomb') {
  console.log('User chooses ... cheating... ')
  return userInput
}
else {
  console.log('You entered a wrong sign.')
}

}

const getComputerChoice = () => {
  let compChoiceStr = ''
  const compChoice = Math.floor(Math.random() * 3)
  if (compChoice === 0) {
    compChoiceStr = 'rock'
    console.log(`Computer Chooses ${compChoiceStr}`)
    return compChoiceStr
  } 
  else if (compChoice === 1) {
    compChoiceStr = 'paper'
    console.log(`Computer Chooses ${compChoiceStr}`)
    return compChoiceStr
  }
  
  else if (compChoice === 2) {
    compChoiceStr = 'scissors'
    console.log(`Computer Chooses ${compChoiceStr}`)
    return compChoiceStr
  }
}



function determineWinner(u, c) {


  if (c === 'paper' && u === 'scissors') {
    userCounter += 1
    return console.log('User Wins')

  }
  else if (c === 'paper' && u === 'rock') {
    computerCounter += 1
    return console.log('Computer Wins')

}
  else if (c === 'paper' && u === 'paper') {
    return console.log('A tie!')

}
  else if (c === 'rock' && u === 'paper') {
    userCounter += 1  
    return console.log('User Wins')

}
  else if (c === 'rock' && u === 'scissors') {
    computerCounter += 1
    return console.log('Computer Wins')

}
  else if (c === 'rock' && u === 'rock') {
    return console.log('A tie!')

}
  else if (c === 'scissors' && u === 'paper') {
    computerCounter += 1   
    return console.log('Computer Wins')

}
  else if (c === 'scissors' && u === 'rock') {
    userCounter += 1    
    return console.log('User Wins')

}
  else if (c === 'scissors' && u === 'scissors') {
    return console.log('A tie!')
    

}
  else if (c === 'scissors' && u === 'bomb') {
    userCounter += 1    
    return console.log('User Wins.... >_> ')
    

}
  }



for (var i = 0; i < 99999; i++) {
determineWinner(getUserChoice('rock'), getComputerChoice())
scoreBoard()
}







