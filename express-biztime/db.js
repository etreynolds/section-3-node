/** Database setup for BizTime. */

const { Client } = require("pg");

let DB_URI = {
    user: 'etrain',
    host: 'localhost',
    database: '',
    password: 'password'
};

if (process.env.NODE_ENV === "test") {
    DB_URI = "postgresql://etrain:password@localhost/biztime_test";
} else {
    DB_URI = "postgresql://etrain:password@localhost/biztime";
}

let db = new Client({
    connectionString: DB_URI
});

db.connect();

module.exports = db;