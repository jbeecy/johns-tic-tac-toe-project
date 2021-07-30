// require store.js
const store = require('../store')
$('#game-screen').hide()
$('#sign-out').hide()
// begin to enter the on success and on failure functions

// if user clicks inside game box, log x or o and add 1 to turn calc

const onSignUpSuccess = (response) => {
  $('#auth-message').text(`Thank you for signing up, ${response.user.email}, enjoy!`)
  console.log(response)
  $('#sign-up').trigger('reset')
  $('.sign-up').hide()
}

const onSignUpFailure = (error) => {
  $('#auth-message').text(`Sign up failed. make sure your email is formatted correctly and that your passwords match. Error Status: ${error.status}`)
  $('#sign-up').trigger('reset')
}

const onSignInFailure = (error) => {
  $('#auth-message').text(`Sign in failed, please create an account and make sure your credentials are correct. Error status: ${error.status}`)
  $('#sign-in').trigger('reset')
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
  $('.sign-in').hide()
  $('.sign-up').hide()
  $('#sign-out').show()
  $('#game-screen').show()
  $('#auth-message').text('')
}

const onSignOutSuccess = () => {
  $('#message').text('See you soon!')
  $('.sign-in').show()
  $('.sign-up').show()
  $('#sign-out').hide()
  $('#game-screen').hide()
}

const onNewGameSuccess = (response) => {
  $('#message').text('Lets Play!')
  store.gameId = response.game._id
  console.log(response.game._id)
  $('#game-screen').show()
  console.log('success')
  $('#sign-out').show()
}

// these are all the same, will be easy to switch over
const onBoxSuccess = () => {
  $('#message').text('Nice move!')
}

// module export
// lets create 1 on failure function vs several on event failure functions. DRY code
module.exports = {
  onSignUpSuccess,
  onFailure,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onSignInFailure,
  onSignUpFailure,
  onBoxSuccess
}
