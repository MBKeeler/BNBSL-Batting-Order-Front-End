'use strict'
const config = require('../config')
const store = require('../store')

const enterPlayer = function (data) {
//  console.log('app_api.enterPlayer called:', data)
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const modifyPlayer = function (data) {
//  console.log('app_api.modifyPlayer called: ', data.player.id)
  const playerID = data.player.id
  return $.ajax({
    url: config.apiOrigin + '/players/' + playerID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePlayer = function (data) {
//  console.log('deltePlayer called')
  return $.ajax({
    url: config.apiOrigin + '/players/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const findPlayers = function (data) {
 console.log('app_api.findPlayer called', data)
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllPlayers = function () {
//  console.log('showAllPlayers called')
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data
  })
}
// begin season methods

const enterSeason = function (data) {
//  console.log('app_api.enterPlayer called:', data)
  return $.ajax({
    url: config.apiOrigin + '/seasons',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSeason = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/seasons/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const viewSeasons = function () {
  console.log('app_api.viewSeasons called:')
  return $.ajax({
    url: config.apiOrigin + '/seasons',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data
  })
}

const createPlayerSeason = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/player_seasons',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePlayerSeason = function (data) {
  console.log('updatePlayerSeason data is:', data)
  const playerseasonID = data.player_season.id
  return $.ajax({
    url: config.apiOrigin + '/player_seasons/' + playerseasonID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  enterPlayer,
  modifyPlayer,
  deletePlayer,
  findPlayers,
  showAllPlayers,
  viewSeasons,
  enterSeason,
  deleteSeason,
  createPlayerSeason,
  updatePlayerSeason
}
