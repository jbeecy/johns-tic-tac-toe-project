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
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
  $('.game-box').text('')
}

const checkForWin = function () {
  if (($('#box-0').text() === 'X') && ($('#box-1').text() === 'X') && ($('#box-2').text() === 'X')) {
    store.gameOver = true
    $('#message-1').text('X has won, click new game to go again.')
  } else if (($('#box-0').text() === 'O') && ($('#box-1').text() === 'O') && ($('#box-2').text() === 'O')) {
    store.gameOver = true
    $('#message-1').text('O has won, click new game to go again.')
  } else if (($('#box-3').text() === 'X') && ($('#box-4').text() === 'X') && ($('#box-5').text() === 'X')) {
    store.gameOver = true
    $('#message-1').text('X has won, click new game to go again.')
  } else if (($('#box-3').text() === 'O') && ($('#box-4').text() === 'O') && ($('#box-5').text() === 'O')) {
    store.gameOver = true
    $('#message-1').text('O has won, click new game to go again.')
  } else if (($('#box-6').text() === 'X') && ($('#box-7').text() === 'X') && ($('#box-8').text() === 'X')) {
    store.gameOver = true
    $('#message-1').text('X has won, click new game to go again.')
  } else if (($('#box-6').text() === 'O') && ($('#box-7').text() === 'O') && ($('#box-8').text() === 'O')) {
    store.gameOver = true
    $('#message-1').text('O has won, click new game to go again.')
  } else if (($('#box-0').text() === 'X') && ($('#box-3').text() === 'X') && ($('#box-6').text() === 'X')) {
    store.gameOver = true
    $('#message-1').text('X has won, click new game to go again.')
  } else if (($('#box-0').text() === 'O') && ($('#box-3').text() === 'O') && ($('#box-6').text() === 'O')) {
    store.gameOver = true
    $('#message-1').text('O has won, click new game to go again.')
  } else if (($('#box-1').text() === 'X') && ($('#box-4').text() === 'X') && ($('#box-7').text() === 'X')) {
    store.gameOver = true
    $('#message-1').text('X has won, click new game to go again.')
  } else if (($('#box-1').text() === 'O') && ($('#box-4').text() === 'O') && ($('#box-7').text() === 'O')) {
    store.gameOver = true
    $('#message-1').text('O has won, click new game to go again.')
  } else if (($('#box-2').text() === 'X') && ($('#box-5').text() === 'X') && ($('#box-8').text() === 'X')) {
    store.gameOver = true
    $('#message-1').text('X has won, click new game to go again.')
  } else if (($('#box-2').text() === 'O') && ($('#box-5').text() === 'O') && ($('#box-8').text() === 'O')) {
    store.gameOver = true
    $('#message-1').text('O has won, click new game to go again.')
  } else if (($('#box-0').text() === 'X') && ($('#box-4').text() === 'X') && ($('#box-8').text() === 'X')) {
    store.gameOver = true
    $('#message-1').text('X has won, click new game to go again.')
  } else if (($('#box-0').text() === 'O') && ($('#box-4').text() === 'O') && ($('#box-8').text() === 'O')) {
    store.gameOver = true
    $('#message-1').text('O has won, click new game to go again.')
  } else if (($('#box-2').text() === 'X') && ($('#box-4').text() === 'X') && ($('#box-6').text() === 'X')) {
    store.gameOver = true
    $('#message-1').text('X has won, click new game to go again.')
  } else if (($('#box-2').text() === 'O') && ($('#box-4').text() === 'O') && ($('#box-6').text() === 'O')) {
    store.gameOver = true
    $('#message-1').text('O has won, click new game to go again.')
  } else if ((($('#box-1').text() !== '') && ($('#box-1').text() !== '') && ($('#box-2').text() !== '') && ($('#box-3').text() !== '') && ($('#box-4').text() !== '') && ($('#box-5').text() !== '') && ($('#box-6').text() !== '') && ($('#box-7').text() !== '') && ($('#box-8').text() !== ''))) {
    store.gameOver = false
    $('#message-1').text('The result is a tie, try again by clicking new game.')
  } else {
    store.gameOver = false
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  store.currentPlayer = 'O'
  store.gameOver = false
  console.log(store.currentPlayer)
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onFailure)
  $('.game-box').text('')
  $('#message-1').text('')
}

// selecting #box-0- solved
// calling api.box-0- solved
// ui.onboxsuccess- solved
const onBox = function (event) {
  event.preventDefault()
  store.index = $(event.target).data('cell-index')
  console.log(store.index)
  if (store.gameOver === false) {
    if ($(event.target).text() === '') {
      api.box()
        .then(ui.onBoxSuccess)
        .catch(ui.onFailure)
      if (store.currentPlayer === 'X') {
        store.currentPlayer = 'O'
      } else {
        store.currentPlayer = 'X'
      }
      $(event.target).text(store.currentPlayer)
      checkForWin()
    } else ($('#message').text('Oops! Pick an empty space.'))
    checkForWin()
    console.log(store.gameOver)
  }
}

// going to need to repeat event functions for user input of the game

// module export the functions
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onBox
}
