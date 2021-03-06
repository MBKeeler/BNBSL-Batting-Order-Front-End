'use strict'
// const config = require('../config')
// const store = require('../store')
//const app_api = require('./app_api')
const appEvents = require('./app_events')
const showBattingOrderTemplate = require('../templates/helpers/player_list.handlebars')
const showSeasonTemplate = require('../templates/helpers/season_list.handlebars')
// const selectSeasonTemplate = require('../templates/helpers/season_select.handlebars')
const selectorSeasonTemplate = require('../templates/helpers/season_selector.handlebars')
const selectorPlayerTemplate = require('../templates/helpers/player_list_selector.handlebars')
const showCurrentBattingOrder = require('../templates/helpers/player_order_list.handlebars')
const selectorPlayerSeasonTemplate = require('../templates/helpers/playerseason_selector.handlebars')

const enterPlayerSuccess = function () {
//  console.log('data entered successfully')
  $('#view-PlayersList').empty()
  $('#nav-message').show().html('New player data entered successfully').fadeOut(8000)
  $(':input', '#enter-player').val('')
}

const enterPlayerFailure = function (error) {
  console.error('enterPlayer failed: ', error)
  $('#view-PlayersList').empty()
  $('#nav-message').show().html('Player failed to save.  Please verify you have filled out all required fields correctly.').fadeOut(8000)
}

const updatePlayerSuccess = function () {
//  console.log('modifyPlayerSuccess called')
  $('#nav-message').show().html('Player data updated successfully').fadeOut(8000)
  $(':input', '#update-player').val('')
  // $('#update-player').collapse()
  $('.card-body').collapse('hide')
  // then(appEvents.onAddPlayerPanel)
}

const updatePlayerFailure = function (error) {
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

const getPlayersSuccess = function (data) {
  console.log('getPlayerSuccess', data)
  const showPlayerHtml = selectorPlayerTemplate({ players: data.players })
  $('#select-player-target').append(showPlayerHtml)
}
const getPlayersFailure = function (error) {
  // console.log(data)
  console.error(error)
  $('#nav-message').show().html('Players failed to display.  Unspecificed error').fadeOut(8000)
}

const listPlayersSuccess = function (data) {
  console.log('listPlayerSuccess called')
  $('#player-display-target').empty()
  const showOrderHtml = showBattingOrderTemplate({ players: data.players })
  $('#player-display-target').append(showOrderHtml)
}

const listPlayersFailure = (error) => {
  console.error(error)
  $('#nav-message').show().html('Players failed to display.  Unspecificed error').fadeOut(8000)
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
  $('.add-player-panel').hide()
  $('#season-display-target').empty()
  $('#select-season-target').empty()
  $('#player-display-target').empty()
  $('.coaches-landing').show()
}

const viewRosters = function (data) {
  $('.batting-roster').hide()
  $('.view-roster-panel').show()
  // const showOrderHtml = showCurrentBattingOrder({ players: data.players })
  // $('#display-order').append(showOrderHtml)
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

const deleteSeasonSuccess = function () {
  $('#nav-message').show().html('New Season data entered successfully').fadeOut(8000)
  $(':input', '#enter-season').val('')
}

const deleteSeasonFailure = function (error) {
  console.error('enterSeason failed: ', error)
  $('#nav-message').show().html('Season failed to save.  Please verify you have filled out all required fields correctly.').fadeOut(8000)
}

const editSeasons = function () {
  $('.coaches-landing').hide()
  $('.enter-season-panel').show()
  $('#season-panel').show()
}

const addPlayers = function () {
  $('.coaches-landing').hide()
  $('.add-player-panel').show()
  // $('#season-panel').show()
}

const viewSeasonsToSelectSuccess = function (data) {
  const showSeasonHtml = selectorSeasonTemplate({ seasons: data.seasons })
  $('.select-season-target').append(showSeasonHtml)
  $('#nav-message').show().html('Seasons available for current user').fadeOut(8000)
}

const viewSeasonsToSelectFailure = function (error) {
  console.error('viewSeasons failed: ', error)
  // $('#view-PlayersList').empty()
  $('#nav-message').show().html('Failed to retrieve seasons from the server.').fadeOut(8000)
}

const viewPlayerSeasonsToSelectSuccess = function (data) {
  const showSeasonHtml = selectorPlayerSeasonTemplate({ player_seasons: data.player_seasons })
  $('.select-playerseason-target').empty()
  $('.select-playerseason-target').append(showSeasonHtml)
  $('#nav-message').show().html('Seasons available for current user').fadeOut(8000)
}

const viewPlayerSeasonsToSelectFailure = function (error) {
  console.error('viewSeasons failed: ', error)
  // $('#view-PlayersList').empty()
  $('#nav-message').show().html('Failed to retrieve seasons from the server.').fadeOut(8000)
}

const viewSeasonsSuccess = function (data) {
  const showSeasonHtml = showSeasonTemplate({ seasons: data.seasons })
  $('#season-display-target').append(showSeasonHtml)
  $('#nav-message').show().html('Seasons for current user').fadeOut(8000)
}

const viewSeasonsFailure = function (error) {
  console.error('viewSeasons failed: ', error)
  // $('#view-PlayersList').empty()
  $('#nav-message').show().html('Failed to retrieve seasons from the server.').fadeOut(8000)
}

const populateSeason = function (data) {
  console.log('populateSeason data is', data)
  $('.season-input').val(data)
}

const populatePlayer = function (data) {
  const playerData = data.split(',')
  const playerID = playerData[0]
  const firstName = playerData[1]
  const lastName = playerData[2]
  const position = playerData[3]
  const bposition = playerData[4]
  const bavg = playerData[5]
  $('#update-playerId').val(playerID)
  $('#update-fname').val(firstName)
  $('#update-lname').val(lastName)
  $('#update-position').val(position)
  $('#update-bposition').val(bposition)
  $('#update-bavg').val(bavg)
}

const createPlayerSeasonSuccess = function () {
  console.log('createPlayerSeasonSuccess called')
  $('#nav-message').show().html('Player added to season batting order').fadeOut(8000)
}

const createPlayerSeasonFailure = function (error) {
  console.error(error)
  $('#nav-message').show().html('Failed to add player to batting order').fadeOut(8000)
}

const getPlayerSeasonSuccess = function (data) {
  $('#nav-message').show().html('Players assigned to batting order').fadeOut(8000)
  const showOrderHtml = showCurrentBattingOrder({ player_seasons: data.player_seasons })
  console.log('data is', data)
  $('#display-order').append(showOrderHtml)
}

const getPlayerSeasonFailure = function (error) {
  console.error(error)
  $('#nav-message').show().html('Failed to get any players for batting order').fadeOut(8000)
}

module.exports = {
  enterPlayerSuccess,
  enterPlayerFailure,
  updatePlayerSuccess,
  updatePlayerFailure,
  findPlayersSuccess,
  findPlayersFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
  toggleEntryMode,
  toggleViewMode,
  getPlayersSuccess,
  getPlayersFailure,
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
  enterSeasonFailure,
  viewSeasonsToSelectSuccess,
  viewSeasonsToSelectFailure,
  deleteSeasonSuccess,
  deleteSeasonFailure,
  populateSeason,
  addPlayers,
  populatePlayer,
  listPlayersSuccess,
  listPlayersFailure,
  createPlayerSeasonSuccess,
  createPlayerSeasonFailure,
  getPlayerSeasonSuccess,
  getPlayerSeasonFailure,
  viewPlayerSeasonsToSelectSuccess,
  viewPlayerSeasonsToSelectFailure
  // checkFormData
}
