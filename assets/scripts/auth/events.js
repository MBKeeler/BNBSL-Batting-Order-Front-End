'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
//const store = require('../store')
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
  console.log(data)
  console.log(data.passwords.old, data.passwords.new)
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

const onUpdatePlayer = function (event) {
  console.log('onUpdatePlayer called')
  const data = getFormFields(this)
  event.preventDefault()
  app_api.modifyPlayer(data)
    .then(app_ui.updatePlayerSuccess)
    .catch(app_ui.upatePlayerFailure)
}

const onSelectPlayer = (event) => {
  event.preventDefault()
  console.log('onSelectPlayer called', event)
  const data = $(event.target).attr('value')
  console.log('onSelectPlayer data:', data)
  $('.card-body').collapse('show')
  app_ui.populatePlayer(data)
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
  app_api.showAllPlayers()
    .then(app_ui.getPlayersSuccess)
    .catch(app_ui.getPlayersFailure)
  app_api.viewSeasons()
    .then(app_ui.viewSeasonsToSelectSuccess)
    .catch(app_ui.viewSeasonsToSelectFailure)
  app_api.getAllPlayerSeasons()
    .then(app_ui.viewPlayerSeasonsToSelectSuccess)
    .catch(app_ui.viewPlayerSeasonsToSelectFailure)
}

const onReturnToTools = function (event) {
  console.log('onReturnToTools called')
  event.preventDefault()
  app_ui.returnToTools()
}

const onViewRosters = function (event) {
  console.log('onViewRosters called')
  event.preventDefault()
  const data = getFormFields(this)
  app_ui.viewRosters()
  // console.log('onViewRosters data is', data)
  app_api.getPlayerSeason(data)
    .then(app_ui.getPlayerSeasonSuccess)
    .catch(app_ui.getPlayerSeasonFailure)
}

const onAddPlayerPanel = function (event) {
  console.log('onAddPlayerPanel called', event)
  event.preventDefault()
  app_ui.addPlayers()
  app_api.showAllPlayers()
    .then(app_ui.listPlayersSuccess)
    .catch(app_ui.listPlayersFailure)
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
  // app_api.showPlayers()
    .then(app_ui.viewSeasonsSuccess)
    .catch(app_ui.viewSeasonsFailure)
}

// handlebars
const onGetPlayers = (event) => {
  event.preventDefault()
  console.log('onGetplayers event:', event)
  app_api.findPlayers(event)
    .then(app_ui.getPlayersSuccess)
    .catch(app_ui.getPlayersFailure)
}

const onSelectSeason = (event) => {
  event.preventDefault()
  console.log('onSelectSeason called', event)
  const data = $(event.target).attr('value')
  console.log('data', data)
  app_ui.populateSeason(data)
}

const onDeleteSeason = (event) => {
  event.preventDefault()
  // console.log('onDeleteSeason called', event)
  const data = $(event.target).attr('value')
  app_api.deleteSeason(data)
    .then(app_ui.deleteSeasonSucess)
    .catch(app_ui.deleteSeasonFailure)
}

const onAssignBattingList = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onAssignBattingList called')
  console.log('event data is', data)
  app_api.createPlayerSeason(data)
    .then(app_ui.createPlayerSeasonSuccess)
    .catch(app_ui.createPlayerSeasonFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#enter-player').on('submit', onEnterPlayer).on('submit', onAddPlayerPanel)
  // $('#modify-a-player').on('submit', onModifyPlayer)
  $('#update-player').on('submit', onUpdatePlayer).on('submit', onAddPlayerPanel)
  $('#player-display-target').on('click', '#deletePlayerBttn', onDeletePlayer).on('click', onAddPlayerPanel)
  $('#select-season-target').on('click', '#selectSeasonBttn', onSelectSeason)
  $('#player-display-target').on('click', '#updatePlayerBttn', onSelectPlayer)
  $('#find-roster').on('submit', onFindPlayers)
  $('#view-allPlayers').on('submit', onGetPlayers)
  $('#view-mode').on('click', onToggleViewMode)
  $('#entry-mode').on('click', onToggleEntryMode)
  $('#view-modify-form').on('click', onShowModForm)
  $('#change-pw-reveal').on('click', onRevealPwForm)
  $('#cancel').on('click', onHidePwForm)
  $('#batting-roster').on('submit', onOpenBattingRoster)
  $('#return-to-tools').on('click', onReturnToTools)
  $('#view-roster-form').on('click', onViewRosters)
  $('#seasons').on('submit', onEditSeasons)
  $('#players').on('submit', onAddPlayerPanel)
  $('#enter-season').on('submit', onEnterSeason)
  $('#view-seasons').on('click', onViewSeasons)
  $('#season-display-target').on('click', '#deleteSeasonBttn', onDeleteSeason)
  $('#create-roster-form').on('submit', onAssignBattingList)
}

module.exports = {
  addHandlers
}
