// require store.js for token auth on sign out
const store = require('./../store')
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

const signOut = function () {
  console.log(store.userToken)
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    }
  })
}

const newGame = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    },
    data
  })
}

// the index cant be hard-coded
const box = function (gameId, data) {
  console.log(store.gameId)
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games/' + store.gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    },
    data: {
      game: {
        cell: {
          index: store.index,
          value: store.currentPlayer
        },
        over: false
      }
    }
  })
}

// going to need to create API calls for game values as well per the events file

// module export the correct functions
module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  box
}
