'use strict'
const store = require('../store')

// begin authentication relate functions
const signUpSuccess = function (data) {
  // console.log(data)
  $('#signup-message').html('You have signed up successfully. Now login.')
  $('#sign-up').fadeOut()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#signup-message').html('Sign up has <span style="color:#f4c542">failed</span>. Please try again.')
}

const signInSuccess = function (data) {
  console.log(data)
  // $('.enter-data').show()
  $('.coaches-landing').show()
  $('.welcome-box').hide()
  $('.navigation-bar').show()
  $('.navbar-default').show()
  $('#nav-message').html('You have signed in successfully').fadeOut(8000)
  // we have to store the user data or header somwhere.  sto we will put it in ../store.js
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#signin-message').show().html('Sign In <span style="color:#f4c542">failed</span>. Please check your username/password and try again').fadeOut(8000)
}

const signOutSuccess = function () {
  // console.log(data)
  $('.enter-data').hide()
  $('.view-data').hide()
  $('.navigation-bar').hide()
  $('.navbar-default').hide()
  $('.coaches-landing').hide()
  $('.batting-roster').hide()
  $('.view-roster-panel').hide()
  $('#view-season').hide()
  $('#season-panel').hide()
  $('#add-player').hide()
  $('#season-display-target').empty()
  $('#select-season-target').empty()
  $('.welcome-box').show()
  $(':input', '#sign-in').val('')
  $(':input', '#enter-player').val('')
  $('#signin-message').html('You have signed out successfully').fadeOut(8000)
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#nav-message').html('Sign Out <span style="color:#f4c542">Failed</span>')
}

const changePWSuccess = function () {
  $('#nav-message').show().html('You have successfully changed your password').fadeOut(8000)
  $(':input', '#change-password').val('')
  $('#change-password').hide()
}

const changePWFailure = function (error) {
  console.error(error)
  $('#nav-message').html('Change of Password  <span style="color:#f4c542">Failed</span>. Check your your password input and please try again.').show().fadeOut(8000)
}

const notUniquePw = function () {
  $('#change-pw-message').html('Your new password is the same as the current password.  Please enter a different password.').show().fadeOut(8000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePWSuccess,
  changePWFailure,
  notUniquePw
}
