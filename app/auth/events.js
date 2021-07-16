// require get form fields, api, and ui
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

// module export the functions
module.exports = {
  onSignUp,
  onSignIn
}
