// require store.js
const store = require('../store')
$('#game-screen').hide()
// begin to enter the on success and on failure functions

// if user clicks inside game box, log x or o and add 1 to turn calc

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
  // need to log the value of current player
  console.log('box 0 successful')
}

const onBox1Success = () => {
  // need to log the value of current player
  console.log('box 1 successful')
}

const onBox2Success = () => {
  // need to log the value of current player
  console.log('box 2 successful')
}

const onBox3Success = () => {
  // need to log the value of current player
  console.log('box 3 successful')
}

const onBox4Success = () => {
  // need to log the value of current player
  console.log('box 4 successful')
}

const onBox5Success = () => {
  // need to log the value of current player
  console.log('box 5 successful')
}

const onBox6Success = () => {
  // need to log the value of current player
  (console.log('box 6 successful'))
}

const onBox7Success = () => {
  // need to log the value of current player
  console.log('box 7 successful')
}

const onBox8Success = () => {
  // need to log the value of current player
  console.log('box 8 successful')
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
  onBox1Success,
  onBox2Success,
  onBox3Success,
  onBox4Success,
  onBox5Success,
  onBox6Success,
  onBox7Success,
  onBox8Success
}
