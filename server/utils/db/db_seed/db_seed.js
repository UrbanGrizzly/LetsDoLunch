const mysql = require('mysql');
const tables = require('./tables.json');
const dummyData = require('./seed.json');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: dotenv.MYSQL_PASSWORD
});

db.connect(err => err ? console.error(err) : console.log('Connection success!'));

// Junction tables have an underscore in the table name
const junctionTableFilter = (tablename) => tablename.includes('_');

const deleteTable = (table) => {
  let queryString = `DROP TABLE ${table}`
  
  db.query(queryString, function(err, rows) {
    if (err) console.log('Error dropping', table, ':\n' , err);
    // console.log('Successfully dropped', table);
  });
};

const createTable = (table) => {
  let queryString = `CREATE TABLE ${table} (${tables[table]})`
  
  db.query(queryString, function(err, rows, fields) {
    if (err) console.log('Error creating', table, ':\n' , err);
    // console.log('Successfully created', table);
  });
};

const insertIntoTable = (table, row) => {
  // Get column names from the table definitions. Exclude those that are not actually columns
  let fields = tables[table].split(', ')
    .map(column => column.split(' ')[0])
    .filter(column => column !== 'PRIMARY' && column !== 'CONSTRAINT')
    .slice(1, row.length+1)
    .join(', ');

  let rowString = row.map(x => "?").join(', ');

  let queryString = `INSERT INTO ${table} (${fields}) values (${rowString})`;

  db.query(queryString, row, function(err) {
    if (err) {
      console.log('Error adding to table', table, 'row:', row);
      console.error(err);
    }
    // console.log('Adding to table', table, 'row:', row);
  });
};

db.query('DROP DATABASE lunch');

db.query('CREATE DATABASE lunch', (err) => {if (err) console.error(err); });

db.query('USE lunch', (err) => {if (err) console.error(err); });

// First create non junction tables
Object.keys(tables).filter(table => !junctionTableFilter(table)).forEach(createTable);

// Now we can create the junction tables
Object.keys(tables).filter(junctionTableFilter).forEach(createTable);

// Seed the dummy data!
if (dummyData) {
  Object.keys(dummyData).forEach(table => {
    dummyData[table].forEach(row => {
      insertIntoTable(table, row);
    });
  });
}

db.end(function(err) {
  if (err) console.log(err);
  else console.log('Connection Ended!');
});
