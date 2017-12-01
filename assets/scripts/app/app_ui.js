'use strict'
// const config = require('../config')
// const store = require('../store')
const app_api = require('./app_api')
const showPlayerTemplate = require('../templates/helpers/player_list.handlebars')
const showSeasonTemplate = require('../templates/helpers/season_list.handlebars')

const enterPlayerSuccess = function () {
//  console.log('data entered successfully')
  $('#view-PlayersList').empty()
  $('#nav-message').show().html('New player data entered successfully').fadeOut(8000)
  $(':input', '#enter-player').val('')
}

// const checkFormData = function () {
// //  console.log('data entered successfully')
//   $('#view-PlayersList').empty()
//   $('#nav-message').show().html('All form fields except notes are required. Please veify you have entered valid form data').fadeOut(8000)
//   $(':input', '#enter-player').val('')
// }

const enterPlayerFailure = function (error) {
  console.error('enterPlayer failed: ', error)
  $('#view-PlayersList').empty()
  $('#nav-message').show().html('Player failed to save.  Please verify you have filled out all required fields correctly.').fadeOut(8000)
}

const modifyPlayerSuccess = function () {
//  console.log('modifyPlayerSuccess called')
  $('#view-PlayersList').empty()
  $('#nav-message').show().html('Player data updated successfully').fadeOut(8000)
  $(':input', '#modify-player').val('')
}

const modifyPlayerFailure = function (error) {
  console.log('modifyPlayerFailure called', error)
  $('#nav-message').show().html('Updates to this player were note saved. Verify all fields in the form are filled in correctly and that you are an owner of this player.').fadeOut(8000)
}

const findPlayersSuccess = function (data) {
//  console.log('findPlayerSuccess called', data)
  $('show-a-player').html('data goes here: ' + data)
}

const findPlayersFailure = function (error) {
  console.log('findPlayerFailure called', error)
  $('#nav-message').show().html('Player could not be found. Check your criteria and try again.').fadeOut(8000)
}

const deletePlayerSuccess = function () {
  // console.log('deletePlayerSuccess called')
  $('#view-PlayersList').empty()
  $('#nav-message').show().html('Player deleted successfully').fadeOut(8000)
}

const deletePlayerFailure = function (error) {
  console.log('deletePlayerFailure called', error)
  $('#nav-message').show().html('Player was not deleted. Verify you are an owner of this player before trying to delete.').fadeOut(8000)
}

// const showAllPlayersSuccess = function (data) {
//   console.log('showAllPlayersSuccess called', data)
// }
//
// const showAllPlayersFailure = function (error) {
//   console.log('showAllPlayersFailure called', error)
// }

const getPlayersSuccess = (data) => {
  // console.log(data)
  $('#view-PlayersList').show()
  $('#view-PlayersList').empty()
  const showPlayersHtml = showPlayerTemplate({ players: data.players })
  $('#display-roster').append(showPlayersHtml)
}

const toggleViewMode = function () {
  $('.view-data').show()
  $('.enter-data').hide()
}

const toggleEntryMode = function () {
  $('.enter-data').show()
  $('.view-data').hide()
}

const toggleModForm = function () {
  $('#modify-a-player').show()
  $('#view-PlayersList').hide()
}
const revealChngPwForm = function () {
  // console.log('app_ui.reavealChangePWForm called')
  $('#change-password').show()
}

const hideChngePwForm = function () {
  $('#change-password').hide()
}

const openBattingRoster = function () {
  $('.coaches-landing').hide()
  $('.batting-roster').show()
}

const returnToTools = function () {
  $('.view-roster-panel').hide()
  $('#view-season').hide()
  $('#season-panel').hide()
  $('.enter-seasons-panel').hide()
  $('.batting-roster').hide()
  $('.view-seasons-panel').hide()
  $('.coaches-landing').show()
}

const viewRosters = function () {
  $('.batting-roster').hide()
  $('.view-roster-panel').show()
}
// begin Season methods

const enterSeasonSuccess = function () {
//  console.log('data entered successfully')
  // $('#view-PlayersList').empty()
  $('#nav-message').show().html('New Season data entered successfully').fadeOut(8000)
  $(':input', '#enter-player').val('')
}

const enterSeasonFailure = function (error) {
  console.error('enterSeason failed: ', error)
  // $('#view-PlayersList').empty()
  $('#nav-message').show().html('Player failed to save.  Please verify you have filled out all required fields correctly.').fadeOut(8000)
}

const editSeasons = function () {
  $('.coaches-landing').hide()
  $('.enter-season-panel').show()
  $('#season-panel').show()
}

const viewSeasonsSuccess = function (data) {
  // $('.enter-season-panel').hide()
  // $('.view-seasons-panel').show()
  // $('#view-season').show()
  const showSeasonHtml = showSeasonTemplate({ seasons: data.seasons })
  $('#season-display-target').append(showSeasonHtml)
  $('#nav-message').show().html('Seasons for current user').fadeOut(8000)
}

const viewSeasonsFailure = function (error) {
  console.error('viewSeasons failed: ', error)
  // $('#view-PlayersList').empty()
  $('#nav-message').show().html('Failed to retrieve seasons from the server.').fadeOut(8000)
}

module.exports = {
  enterPlayerSuccess,
  enterPlayerFailure,
  modifyPlayerSuccess,
  modifyPlayerFailure,
  findPlayersSuccess,
  findPlayersFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
  // showAllPlayersSuccess,
  // showAllPlayersFailure,
  toggleEntryMode,
  toggleViewMode,
  getPlayersSuccess,
  toggleModForm,
  revealChngPwForm,
  hideChngePwForm,
  openBattingRoster,
  viewRosters,
  returnToTools,
  viewSeasonsSuccess,
  viewSeasonsFailure,
  editSeasons,
  enterSeasonSuccess,
  enterSeasonFailure
  // checkFormData
}
