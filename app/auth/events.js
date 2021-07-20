// require get form fields, api, and ui
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')

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

const onBox0 = function (event) {
  event.preventDefault()
  api.box0()
    .then(ui.onBox0Success)
    .catch(ui.onFailure)
}

const onBox1 = function (event) {
  event.preventDefault()
  api.box1()
    .then(ui.onBox1Success)
    .catch(ui.onFailure)
}

const onBox2 = function (event) {
  event.preventDefault()
  api.box2()
    .then(ui.onBox2Success)
    .catch(ui.onFailure)
}

const onBox3 = function (event) {
  event.preventDefault()
  api.box3()
    .then(ui.onBox3Success)
    .catch(ui.onFailure)
}

const onBox4 = function (event) {
  event.preventDefault()
  api.box4()
    .then(ui.onBox4Success)
    .catch(ui.onFailure)
}

const onBox5 = function (event) {
  event.preventDefault()
  api.box5()
    .then(ui.onBox5Success)
    .catch(ui.onFailure)
}

const onBox6 = function (event) {
  event.preventDefault()
  api.box6()
    .then(ui.onBox6Success)
    .catch(ui.onFailure)
}

const onBox7 = function (event) {
  event.preventDefault()
  api.box7()
    .then(ui.onBox7Success)
    .catch(ui.onFailure)
}

const onBox8 = function (event) {
  event.preventDefault()
  api.box8()
    .then(ui.onBox8Success)
    .catch(ui.onFailure)
}

// going to need to repeat event functions for user input of the game

// module export the functions
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onBox0,
  onBox1,
  onBox2,
  onBox3,
  onBox4,
  onBox5,
  onBox6,
  onBox7,
  onBox8
}
