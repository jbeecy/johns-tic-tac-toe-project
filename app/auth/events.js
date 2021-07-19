// require get form fields, api, and ui
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// start writing events code per the event listeners on app.js
// prevent the page from reloading
// get the information from the event and the form
// next we need to make an API call with ajax
// the api call needs .then and .catch to handle success and failure
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onFailure)
}

// const onBox0 = function (event) {
//   event.preventDefault()
//   api.box0()
//     .then(ui.onBox0Success)
//     .catch(ui.onFailure)
// }

const onFirstMove = function (event) {
  event.preventDefault()
  store.firstIndex = event.target.getAttribute('data-cell-index')
  $(event.target).text('X')
  api.firstMove()
    .then(ui.onFirstMoveSuccess)
    .catch(ui.onFailure)
  // console.log(event.target.getAttribute('data-cell-index'))
}

const onSecondMove = function (event) {
  event.preventDefault()
  store.secondIndex = event.target.getAttribute('data-cell-index')
  $(event.target).text('O')
  api.secondMove()
    .then(ui.onSecondMoveSuccess)
    .catch(ui.onFailure)
}

// going to need to repeat event functions for user input of the game

// module export the functions
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onFirstMove,
  onSecondMove
  // onBox0
}
