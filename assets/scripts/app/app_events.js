'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./app_api')
const ui = require('./app_ui')

const onEnterPlayer = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('enterPlayer called', data)
  api.enterPlayer(data)
    .then(ui.enterPlayerSuccess)
    .catch(ui.enterPlayerFailure)
}

const onModifyPlayer = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  api.modifyPlayer(data)
    .then(ui.modifyPlayerSuccess)
    .catch(ui.modifyPlayerSuccess)
}

const onDeletePlayer = function (event) {
  // console.log('onDeletePlayer called')
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  api.deletePlayer(data)
    .then(ui.deletePlayerSuccess)
    .catch(ui.deletePlayerSuccess)
}

const onFindPlayer = function (event) {
  // console.log('onFindPlayer called')
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  api.findPlayer(data)
    .then(ui.findPlayerSuccess)
    .catch(ui.findPlayerFailure)
}

const onShowAllPlayers = function (event) {
  // console.log('onShowAllPlayers called')
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  api.enterPlayer(data)
    .then(ui.showAllPlayersSuccess)
    .catch(ui.showAllPlayersFailure)
}

const addHandlers = function () {
  $('#enter-player').on('submit', onEnterPlayer)
  $('#modify-player').on('submit', onModifyPlayer)
  $('#delete-player').on('click', onDeletePlayer)
  $('#find-player').on('click', onFindPlayer)
  $('#view-allPlayers').on('click', onShowAllPlayers)
}

module.exports = {
  addHandlers
}
