// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// create and require events.js
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', authEvents.onNewGame)
  $('#box-0').on('click', authEvents.onBox0)
  $('#box-1').on('click', authEvents.onBox1)
  $('#box-2').on('click', authEvents.onBox2)
  $('#box-3').on('click', authEvents.onBox3)
  $('#box-4').on('click', authEvents.onBox4)
  $('#box-5').on('click', authEvents.onBox5)
  $('#box-6').on('click', authEvents.onBox6)
  $('#box-7').on('click', authEvents.onBox7)
  $('#box-8').on('click', authEvents.onBox8)
})

// after writing forms on html create event listeners for sign up, in, out

// after ^ is functional, create event listeners for the table spaces to keep track of the game.
// need to figure out how to log x and o for user inputs and how to go back and forth between them.
