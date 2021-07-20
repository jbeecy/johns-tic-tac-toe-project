// require store.js
// const store = require('./../store')

const store = require('../store')
// $('#game-screen').hide()
// begin to enter the on success and on failure functions

// for (let i = 1; i < 10; i++)
// let turnCalc = i
// if user clicks inside game box, log x or o and add 1 to turn calc
// const getTurnId(turnCalc) = {
//   let x = turnCalc % 2,
//     if (x === 0) {
//       return 'X'
//     } else if (x == 1) {
//       return 'O'
//     } else {
//       throw new Error("ERROR, click on an empty box.")
//   }
// }

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up, ${response.user.email}, enjoy!`)
  console.log(response)
  $('#sign-up').trigger('reset')
}

const onFailure = (error) => {
  $('#message').text(`Error status: ${error.status}`)
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text(`Welcome back, ${response.user.email}!`)
  store.userToken = response.user.token
  console.log(response.user.token)
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#game-screen').show()
}

const onSignOutSuccess = () => {
  $('#message').text('See you soon!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#game-screen').hide()
}

const onNewGameSuccess = (response) => {
  $('#message').text('Lets Play!')
  store.gameId = response.game._id
  console.log(response.game._id)
  $('#game-screen').show()
  console.log('success')
}

const onBox0Success = () => {
  // evaluate turn calculator and log applicable variable
}

const onBox1Success = () => {
  // evaluate turnCalc and log applicable variable
}

// module export
// lets create 1 on failure function vs several on event failure functions. DRY code
module.exports = {
  onSignUpSuccess,
  onFailure,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onBox0Success,
  onBox1Success
}
