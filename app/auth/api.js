// require store.js for token auth on sign out
// const store = require('./../store')
// This will be so that we can store tokens for users sign out

// construct appropriate api calls for post, patch, get, delete

const signUp = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-in',
    method: 'POST',
    data
  })
}

// module export the correct functions
module.exports = {
  signUp,
  signIn
}
