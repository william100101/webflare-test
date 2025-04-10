const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

// create lot_info table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS lot_info (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lot_number INTEGER,
      title TEXT DEFAULT "asdf",
      description TEXT,
      consignor INTEGER,
      estimate_lower_bound INTEGER,
      estimate_higher_bound INTEGER
    )
  `);
});

module.exports = db;
