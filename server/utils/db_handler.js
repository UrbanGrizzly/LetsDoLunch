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

const { query, checkingQuery } = require('./db/promisified_mysql')(db);

const userQuery = function(user) {
  return user.fbtoken ? `fbtoken="${user.fbtoken}"` : `username="${user.username}"`;
}

db.connect(function(err) {
  if (err) console.error('Error establishing database connection:', err);
  else console.log('Database connection established!');
});

const addUser = function(user, token) {
  // checkingQuery will reject its promise with a message if its query returns any matches.
  // Here we check if anybody exists with the same username before we make another one.
  // Similar behavior through the rest of the functions.

  return checkingQuery(`SELECT * FROM users WHERE ${userQuery(user)}`)
  .then(() => query('INSERT INTO users SET ?', user))
  .then(() => user);
}

const addUserPreference = function(req, preference) {
  let qs1 = 
  `SELECT p.id FROM users INNER JOIN\
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

const addListing = function(listing) {
  let { name, address, categories } = listing;

  let qs1 = 
  `SELECT id FROM listings WHERE name="${name}"\
  AND address="${address}";`;
  let qs2 = 
  `INSERT INTO listings SET ?`;

  // Return the id of the listing in the database
  return new Promise((resolve, reject) => {
    checkingQuery(qs1)
    .then(() => query(qs2, { name, address }))
    .then((data) => {
      // Ensures that each category exists in the database, then adds each category listed
      // in the listing categories array to the preferences_listings junction table.
      Promise.all(
        (categories || []).map(category => (
          addListingPreference(data.insertId, {
            name: category,
            type: 'cuisine'
          })
        ))
      )
      // Then we resolve the promise with our listing id.
      .then(() => resolve(data.insertId))
      .catch((err) => console.log(err));
    })
    // If we are catching this promise, then the listing already exists and we don't need to 
    // populate the database with its categories.
    .catch((row) => resolve(row[0] && row[0].id));
  });
}

const addPreference = function(preference) {
  let { name, type } = preference;

  let qs1 = 
  `SELECT id FROM preferences WHERE name="${name}"\
  AND type="${type}";`;

  let qs2 = 
  `INSERT INTO preferences SET ?`;

  // Return the id of the preference in the database
  return new Promise((resolve, reject) => {
    checkingQuery(qs1)
    .then(() => query(qs2, preference))
    .then((data) => resolve(data.insertId))
    .catch((row) => resolve(row[0] && row[0].id));
  });
}

const addListingPreference = function(listingId, preference) {
  let preferenceId;

  let makeQs1 = () => (
  `SELECT id FROM preferences_listings WHERE preference_id=${preferenceId}\
  AND listing_id=${listingId};`
  );

  let makeQs2 = () => (
  `INSERT INTO preferences_listings (preference_id, listing_id) VALUES\
  (${preferenceId}, ${listingId});`
  );

  return new Promise((resolve, reject) => {
    addPreference(preference)
    .then((id) => {
      preferenceId = id;
      // Now that we have the preference id, we can make the query strings
      // and insert into the database
      checkingQuery(makeQs1())
    })
    .then(() => query(makeQs2()))
    .then((data) => resolve(data.insertId))
    .catch((row) => resolve(row[0] && row[0].id));
  });
}

const addUserListing = function(user, listingId, type) {
  let qs1 = 
  `SELECT l.id FROM users INNER JOIN listings_users as l\
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

const getUserPreferences = function(user) {
  let qs = 
  `SELECT ps.name, p.type, p.created FROM preferences_users as p\
  INNER JOIN preferences as ps ON ps.id=p.preference_id\
  WHERE p.user_id=(SELECT id FROM users\
  WHERE ${userQuery(user)}) ORDER BY p.created DESC;`;
  
  return query(qs);
}

const deleteUserPreference = function(user, preference) {
  let qs =
  `DELETE FROM preferences_users WHERE\
  preference_id=(SELECT id FROM preferences WHERE name="${preference.name}")\
  AND user_id=(SELECT id FROM users WHERE ${userQuery(user)});`;

  return query(qs);
}

const getUserListings = function(user) {
  let qs = 
  `SELECT ls.name, l.type, l.created FROM listings_users as l\
  INNER JOIN listings as ls ON ls.id=l.listing_id\
  WHERE l.user_id=(SELECT id FROM users\
  WHERE ${userQuery(user)}) ORDER BY l.created DESC;`;
  
  return query(qs);
}

const deleteUserListing = function(user, listing) {
  let qs =
  `DELETE FROM listings_users WHERE\
  listing_id=(SELECT id FROM listings WHERE name="${listing.name}")\
  AND user_id=(SELECT id FROM users WHERE ${userQuery(user)});`;

  return query(qs);
}

const moveUserListing = function(user, listing, destination) {
  let qs =
  `UPDATE listings_users SET type="${destination}" WHERE\
  listing_id=(SELECT id FROM listings WHERE name="${listing.name}")
  AND user_id=(SELECT id FROM users WHERE ${userQuery(user)});`

  return query(qs);
}

module.exports = {
  addUser,
  addListing,
  addPreference,
  addListingPreference,
  addUserListing,
  getUserPreferences,
  deleteUserPreference,
  getUserListings,
  deleteUserListing,
  moveUserListing
}
