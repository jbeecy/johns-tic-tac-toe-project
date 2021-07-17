// require store.js
// const store = require('./../store')

const store = require('../store')
// $('#game-screen').hide()
// begin to enter the on success and on failure functions
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
  // $('#game-screen').show()
}

const onSignOutSuccess = () => {
  $('#message').text('See you soon!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  // $('#game-screen').hide()
}

// module export
// lets create 1 on failure function vs several on event failure functions. DRY code
module.exports = {
  onSignUpSuccess,
  onFailure,
  onSignInSuccess,
  onSignOutSuccess
}
