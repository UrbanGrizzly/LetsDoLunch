var mysql = require('mysql');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'lunch'
});

var { query, checkingQuery } = require('./db/promisified_mysql')(db);

let userQuery = function(user) {
  return user.fbtoken ? `fbtoken="${user.fbtoken}"` : `username="${user.username}"`;
}

db.connect(function(err) {
  if (err) console.error('Error establishing database connection:', err);
  else console.log('Database connection established!');
});

module.exports.addUser = function(user, token) {
  // checkingQuery will reject its promise with a message if its query returns any matches.
  // Here we check if anybody exists with the same username before we make another one.
  // Similar behavior through the rest of the functions.

  return checkingQuery(`SELECT * FROM users WHERE ${userQuery(user)}`)
  .then(() => query('INSERT INTO users SET ?', user))
  .then(() => user);
}

module.exports.addListing = function(listing) {
  return checkingQuery(`SELECT * FROM listings WHERE name="${listing.name}"`)
  .then(() => query('INSERT INTO listings SET ?', listing))
  .then(() => listing);
}

module.exports.addUserPreference = function(req, preference) {
  let qs1 = 
  `SELECT * FROM users INNER JOIN\
  preferences_users as p ON p.user_id=users.id INNER JOIN\
  preferences as ps ON ps.id=p.preference_id where\
  ${userQuery(user)} and\
  ps.name="${preference.name}"`;
    
  let qs2 = 
  `INSERT INTO preferences_users (preference_id, user_id, type) VALUES\
  ((SELECT id FROM preferences WHERE name="${preference.name}"),\
  (SELECT id FROM users WHERE ${userQuery(req)}),\
  "${preference.type}")`;

  return checkingQuery(qs1)
  .then(() => query(qs2));
}

module.exports.addListing = function(listing) {
  let { name, address } = listing;

  let qs1 = 
  `SELECT id FROM listings WHERE name="${name}"\
  AND address="${address}";`;
  let qs2 = 
  `INSERT INTO listings SET ?`;

  // Return the id of the listing in the database
  return new Promise((resolve, reject) => {
    checkingQuery(qs1)
    .then(() => query(qs2, listing))
    .then((data) => resolve(data.insertId))
    .catch((row) => resolve(row[0].id));
  });
}

module.exports.addUserListing = function(user, listingId, type) {
  let qs1 = 
  `SELECT * FROM users INNER JOIN listings_users as l\
  ON l.user_id=users.id INNER JOIN listings as ls\
  ON ls.id=l.listing_id WHERE ${userQuery(user)}\
  AND ls.id="${listingId}" AND l.type="${type}";`;
  
  let qs2 = 
  `INSERT INTO listings_users (listing_id, user_id, type) VALUES\
  ("${listingId}", (SELECT id FROM users WHERE ${userQuery(user)}),\
  "${type}");`;

  return checkingQuery(qs1)
  .then(() => query(qs2));
}

module.exports.getUserPreferences = function(req) {
  let qs = 
  `SELECT ps.name, p.type FROM preferences_users as p\
  INNER JOIN preferences as ps ON ps.id=p.preference_id\
  WHERE p.user_id=(SELECT id FROM users\
  WHERE ${userQuery(req)})`;
  
  return query(qs);
}

module.exports.deleteUserPreference = function(req, preference) {
  let qs =
  `DELETE FROM preferences_users WHERE\
  preference_id=(SELECT id FROM preferences WHERE name="${preference.name}")\
  AND user_id=(SELECT id FROM users WHERE ${userQuery(req)});`;

  return query(qs);
}

// // query for listings preferences by user
//   `SELECT ls.name, l.type FROM listings_users as l\
//   INNER JOIN listings as ls ON ls.id=l.listing_id\
//   WHERE ls.id=(SELECT id FROM users\
//   WHERE ${userQuery(user)})`;

module.exports.getUserListings = function(req) {
  let qs = 
  `SELECT ls.name, l.type FROM listings_users as l\
  INNER JOIN listings as ls ON ls.id=l.listing_id\
  WHERE l.user_id=(SELECT id FROM users\
  WHERE ${userQuery(req)})`;
  
  return query(qs);
}

module.exports.deleteUserListing = function(req, listing) {
  let qs =
  `DELETE FROM listings_users WHERE\
  listing_id=(SELECT id FROM listings WHERE name="${listing.name}")\
  AND user_id=(SELECT id FROM users WHERE ${userQuery(req)});`;

  return query(qs);
}

// module.exports.addUser({username: "sup5"})
// .then(data=>console.log(data))
// .catch(err => console.log(err));

// module.exports.addUserPreference({username: "sup5"}, {name: "Chinese", type: "also love"})
// .then(data => console.log(data))
// .catch(err => console.log(err));

// module.exports.getUserListings({username: "Valerie"})
// .then(data => console.log(data))
// .catch(err => console.log(err));
