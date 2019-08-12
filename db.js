
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var low = require('lowdb');
db = low(adapter);
db.defaults({ users: [] })
  .write();

  module.exports = db;
