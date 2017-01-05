
var asyncTasks = function(numTasks, callback) {
  // asyncTasks is designed such that you tell it how many tasks are to be performed, and
  // a callback. asyncTasks will return a function to call at the end of each task--when
  // the function has been called numTasks amount of times, it will invoke the callback.
  var numCompleted = 0;

  return function() {
    if (++numCompleted === numTasks) {
      callback();
    }
  }

}

module.exports = {
  asyncTasks: asyncTasks
}
