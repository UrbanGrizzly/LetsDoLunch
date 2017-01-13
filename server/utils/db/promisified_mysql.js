
module.exports = function(db) {
  return {

    query: function(query, queryData) {
      return new Promise((resolve, reject) => {
        db.query(query, queryData, function(err, rows) {
          if (err) reject(err);
          else if (rows) {
            resolve(rows);
          }
        });
      });
    },

    checkingQuery: function(query) {
      return new Promise((resolve, reject) => {

        db.query(query, function(err, rows) {
          if (err) reject('Error in the checking query:', err);
          else if (rows.length) {
            reject(rows);
          } else {
            resolve();
          }
        });

      })
    }
  };
}
