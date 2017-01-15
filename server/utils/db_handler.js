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

const userQuery = (user) => {
  let { email, fbname, username } = user || {};
  return email ? `email="${email}"` : fbname ? `fbname="${fbname}"` : username ? `username="${username}"` : `username="Valerie"`;
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

const addUserPreference = function(user, preferenceId, type) {
  let qs1 =
  `SELECT p.id FROM users INNER JOIN\
  preferences_users as p ON p.user_id=users.id INNER JOIN\
  preferences as ps ON ps.id=p.preference_id where\
  ${userQuery(user)} and\
  ps.id="${preferenceId}"`;

  let qs2 =
  `INSERT INTO preferences_users (preference_id, user_id, type) VALUES\
  ("${preferenceId}", (SELECT id FROM users WHERE ${userQuery(user)}),\
  "${type}");`;

  return checkingQuery(qs1)
  .then(() => query(qs2))
  .catch((err) => console.error(err))
}

const addListing = function(listing) {
  let { name, address, yelpCategory, lat, lng } = listing;
  let addressQuery = `lat=${lat} AND lng=${lng}`;

  let qs1 =
  `SELECT id FROM listings WHERE name="${name}"\
  AND ${ addressQuery };`;

  let qs2 =
  `INSERT INTO listings SET ?`;

  // Return the id of the listing in the database
  return new Promise((resolve, reject) => {
    checkingQuery(qs1)
    .then(() => query(qs2, { name, address, lat, lng }))
    .then((data) => {
      // Ensures that each category exists in the database, then adds each category listed
      // in the listing categories array to the preferences_listings junction table.
      Promise.all(
        ([yelpCategory]||[]).map(category => (
          addListingPreference(data.insertId, {
            name: category,
            type: 'cuisine'
          }).catch(() => console.error('y\'all fucked up...'))
        ))
      )
      // Then we resolve the promise with our listing id.
      .then(() => resolve(data.insertId))
      .catch((err) => console.log(err));
    })
    // If we are catching this promise, then the listing already exists and we don't need to
    // populate the database with its categories.
    .catch((row) => resolve(row[0] ? row[0].id : "undefined"));
  });
}

const getHomeLocation = function(user) {

}

const setHomeLocation = function(user, location) {
  console.log('user: ', user)
  console.log('location: ', location)

  let name = user.email + '\'s Home';

  let { lat, lng } = location



  // let homeExists = `SELECT id FROM listings WHERE name="${(user.fbtoken || user.username) + 'Home'}";`
  // let addHomeToListings = `INSERT INTO listings SET ?`
  // let changeHomeListing = `UPDATE listings SET lat=${lat}, lng=${lng} WHERE name="${(user.fbtoken || user.username) + 'Home'}";`

  return new Promise((resolve, reject) => {
    checkingQuery(homeExists)
    .then(() => query(addHomeToListings, {lat, lng}))
    .then(data => resolve(data.insertId))
    .catch(() => query(changeHomeListing))
  })
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
  ON l.user_id=users.id LEFT JOIN listings as ls\
  ON ls.id=l.listing_id WHERE ${userQuery(user)}\
  AND ls.id="${listingId}";`;

  let qs2 =
  `INSERT INTO listings_users (listing_id, user_id, type) VALUES\
  ("${listingId}", (SELECT id FROM users WHERE ${userQuery(user)}),\
  "${type}");`;

  return checkingQuery(qs1)
  .then(() => query(qs2))
  .catch((err) => moveUserListing(user, listingId, type));
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
  id=${preference.id};`;

  return query(qs);
}

const getUserListings = function(user) {
  let qs =
  `SELECT ls.name, l.type, l.created, l.id, p.name as category FROM listings_users as l\
  INNER JOIN listings as ls ON ls.id=l.listing_id\
  LEFT JOIN preferences_listings as pl ON pl.listing_id=l.id\
  LEFT JOIN preferences as p ON p.id=pl.preference_id\
  WHERE l.user_id=(SELECT id FROM users\
  WHERE ${userQuery(user)}) ORDER BY l.created DESC;`;

  return query(qs);
}

const deleteUserListing = function(user, listing) {
  let qs =
  `DELETE FROM listings_users WHERE\
  id=${listing.id};`;
  console.log(qs);

  return query(qs);
}

const moveUserListing = function(user, listing, destination) {
  let listingIdSelectorString =
  typeof listing === "object" ? `(SELECT id FROM listings WHERE name="${listing.name}")` : listing || 1;

  let qs =
  `UPDATE listings_users SET type="${destination}" WHERE\
  listing_id=${listingIdSelectorString}\
  AND user_id=(SELECT id FROM users WHERE ${userQuery(user)});`

  return query(qs);
}

module.exports = {
  addUser,
  addUserPreference,
  addListing,
  getHomeLocation,
  setHomeLocation,
  addPreference,
  addUserPreference,
  addListingPreference,
  addUserListing,
  getUserPreferences,
  deleteUserPreference,
  getUserListings,
  deleteUserListing,
  moveUserListing
}
