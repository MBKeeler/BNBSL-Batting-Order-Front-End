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

const findPlayer = function (data) {
//  console.log('app_api.findPlayer called', data)
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

module.exports = {
  enterPlayer,
  modifyPlayer,
  deletePlayer,
  findPlayer,
  showAllPlayers
}
