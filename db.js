'use strict'

var low = require('lowdb')
var storage = require('lowdb/file-sync')

var dbPath = process.env.NODE_ENV === 'test' ? './test/fixtures/db.json' : 'db.json'

module.exports = low(dbPath, { storage: storage })
