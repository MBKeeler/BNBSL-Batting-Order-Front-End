'use strict'

const config = require('../config')
const store = require('../store')

// before using you must modify functions to conform to game api
// pass on to events.js
const signUp = function (data) {
  // console.log('signUp called')
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log('signIn called')
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  // console.log('signOut called')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassWord = function (data) {
  console.log('changePW called', data)
  console.log('user id is ', store.user.id)
  console.log('user token is ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassWord
}
