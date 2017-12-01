'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const app_api = require('../app/app_api')
const app_ui = require('../app/app_ui')

// Authentication handlers

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// for sign in
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-in', data)
  //  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// for signOut

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
// console.log('onSignOut: ', data)
  //  console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// for change password
const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')
  const data = getFormFields(this)
  // console.log(data)
  // console.log(data.passwords.old, data.passwords.new)
  if (data.passwords.old === data.passwords.new) {
    ui.notUniquePw()
  } else {
    api.changePassWord(data)
      .then(ui.changePWSuccess)
      .catch(ui.changePWFailure)
  }
}

// app functions I will want to move out into it's own
const onEnterPlayer = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('enterPlayer called', data)
  // put field check in here
  app_api.enterPlayer(data)
    .then(app_ui.enterPlayerSuccess)
    .catch(app_ui.enterPlayerFailure)
}

const onModifyPlayer = function (event) {
  // console.log('onModifyPlayer called')
  const data = getFormFields(this)
  event.preventDefault()
  app_api.modifyPlayer(data)
    .then(app_ui.modifyPlayerSuccess)
    .catch(app_ui.modifyPlayerFailure)
}

const onDeletePlayer = function (event) {
  // console.log('onDeletePlayer called')
  // console.log('event.target is', event.target)
  event.preventDefault()
  const data = $(event.target).attr('value')
  // console.log('data', data)
  app_api.deletePlayer(data)
    .then(app_ui.deletePlayerSuccess)
    .catch(app_ui.deletePlayerFailure)
}

const onFindPlayers = function (event) {
  // console.log('onFindPlayer called')
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  app_api.findPlayers(data)
    .then(app_ui.findPlayersSuccess)
    .catch(app_ui.findPlayersFailure)
}

// start functions for editSeasons
const onEnterSeason = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onEnterSeason called', data)
  // put field check in here
  app_api.enterSeason(data)
    .then(app_ui.enterSeasonSuccess)
    .catch(app_ui.enterSeasonFailure)
}
// working code.  keep.  using handlebars below
// const onShowAllPlayers = function (event) {
//   console.log('onShowAllPlayers called')
//   const data = getFormFields(this)
//   event.preventDefault()
//   app_api.showAllPlayers(data)
//     .then(app_ui.showAllPlayersSuccess)
//     .catch(app_ui.showAllPlayersFailure)
// }
// toggle view methods
const onToggleEntryMode = function (event) {
  app_ui.toggleEntryMode()
}

const onToggleViewMode = function (event) {
  app_ui.toggleViewMode()
}
const onRevealPwForm = function (event) {
  app_ui.revealChngPwForm()
}

const onShowModForm = function (event) {
  app_ui.toggleModForm()
}

const onHidePwForm = function (event) {
  app_ui.hideChngePwForm()
}

const onOpenBattingRoster = function (event) {
  console.log('onOpenBattingRoster called')
  event.preventDefault()
  app_ui.openBattingRoster()
  app_api.viewSeasons()
    .then(app_ui.viewSeasonsToSelectSuccess)
    .catch(app_ui.viewSeasonsToSelectFailure)
}

const onReturnToTools = function (event) {
  console.log('onReturnToTools called')
  event.preventDefault()
  app_ui.returnToTools()
}

const onViewRosters = function (event) {
  console.log('onViewRosters called')
  event.preventDefault()
  app_ui.viewRosters()
}

const onEditSeasons = function (event) {
  console.log('onEditSeasons called')
  event.preventDefault()
  app_ui.editSeasons()
  app_api.viewSeasons()
    .then(app_ui.viewSeasonsSuccess)
    .catch(app_ui.viewSeasonsFailure)
}

// const onGetSeasons = function (event) {
//   console.log('onEditSeasons called')
//   event.preventDefault()
//   app_ui.editSeasons()
// }

const onViewSeasons = function (event) {
  console.log('onViewSeasons called', event)
  event.preventDefault()
  app_api.viewSeasons()
    .then(app_ui.viewSeasonsSuccess)
    .catch(app_ui.viewSeasonsFailure)
}

// handlebars
const onGetPlayers = (event) => {
  event.preventDefault()
  app_api.showAllPlayers()
    .then(app_ui.getPlayersSuccess)
    .catch(app_ui.showAllPlayersFailure)
}

const onSelectSeason = (event) => {
  event.preventDefault()
  console.log('onSelectSeason called', event)
  const data = $(event.target).attr('value')
  console.log('data', data)
  app_ui.populateSeason(data)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#enter-player').on('submit', onEnterPlayer)
  // $('#modify-a-player').on('submit', onModifyPlayer)
  $('#modify-player').on('submit', onModifyPlayer)
  $('#view-PlayersList').on('click', '#deleteBttn', onDeletePlayer)
  $('#select-season-target').on('click', '#selectSeasonBttn', onSelectSeason)
  // $('#view-PlayersList').on('click', '#deleteBttn', onDeleteSeason)
  $('#find-roster').on('submit', onFindPlayers)
  $('#view-allPlayers').on('submit', onGetPlayers)
  $('#view-mode').on('click', onToggleViewMode)
  $('#entry-mode').on('click', onToggleEntryMode)
  $('#view-modify-form').on('click', onShowModForm)
  $('#change-pw-reveal').on('click', onRevealPwForm)
  $('#cancel').on('click', onHidePwForm)
  $('#batting-roster').on('submit', onOpenBattingRoster)
  $('#return-to-tools').on('click', onReturnToTools)
  $('#view-rosters').on('click', onViewRosters)
  $('#seasons').on('submit', onEditSeasons)
  $('#enter-season').on('submit', onEnterSeason)
  $('#view-seasons').on('click', onViewSeasons)
}

module.exports = {
  addHandlers
}
