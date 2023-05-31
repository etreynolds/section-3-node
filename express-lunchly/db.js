/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://etrain:password@localhost/lunchly");

db.connect();

module.exports = db;
