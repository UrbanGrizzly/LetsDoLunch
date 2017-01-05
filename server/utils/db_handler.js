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

db.connect(function(err) {
  if (err) console.error('Error establishing database connection:', err);
  else console.log('Database connection established!');
});

module.exports.addUser = function(user) {
  // checkingQuery will reject its promise with a message if its query returns any matches.
  // Here we check if anybody exists with the same username before we make another one.
  // Similar behavior through the rest of the functions.
  return checkingQuery(`SELECT * FROM users WHERE username="${user.username}"`)
  .then(() => query('INSERT INTO users SET ?', user))
  .then(() => user);
}

module.exports.addListing = function(listing) {
  return checkingQuery(`SELECT * FROM listings WHERE name="${listing.name}"`)
  .then(() => query('INSERT INTO listings SET ?', listing))
  .then(() => listing);
}

module.exports.addUserPreference = function(user, preference) {
  let qs1 = 
  `SELECT * FROM users INNER JOIN\
  preferences_users as p on p.user_id=users.id INNER JOIN\
  preferences as ps on ps.id=p.preference_id where\
  username="${user.username}" and\
  ps.name="${preference.name}"`;
    
  let qs2 = 
  `INSERT INTO preferences_users (preference_id, user_id, type) VALUES\
  ((SELECT id FROM preferences WHERE name="${preference.name}"),\
  (SELECT id FROM users WHERE username="${user.username}"),\
  "${preference.type}")`;

  return checkingQuery(qs1)
  .then(() => query(qs2));
}

module.exports.addUserListing = function(user, listing) {
  let qs1 = 
  `SELECT * FROM users INNER JOIN listings_users as l\
  on l.user_id=users.id INNER JOIN listings as ls\
  on ls.id=l.listing_id where username="${user.username}"\
   and ls.name="${listing.name}"`;
  let qs2 = 
  `INSERT INTO listings_users (listing_id, user_id, type) VALUES\
  ((SELECT id FROM listings WHERE name="${listing.name}"),\
  (SELECT id FROM users WHERE username="${user.username}"),\
  "${listing.type}")`;
  
  return checkingQuery(qs1)
  .then(() => query(qs2));
}

module.exports.getUserPreferences = function(user) {
  let qs = 
  `SELECT ls.name, l.type FROM users INNER JOIN listings_users as l\
  on l.user_id=users.id INNER JOIN listings as ls on ls.id=l.listing_id\
  WHERE users.username="${user.username}"`;
  
  return query(qs);
}

module.exports.getUserListings = function(user) {
  let qs = 
  `SELECT ps.name, p.type FROM users INNER JOIN preferences_users as p\
  on p.user_id=users.id INNER JOIN preferences as ps on ps.id=p.preference_id\
  WHERE users.username="${user.username}"`;
  
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
