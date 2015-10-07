var ua = require('universal-analytics');
var visitor = ua('UA-58453303-3');
module.exports = function(command) {
  return function(options, next) {
      visitor.event(command, options.param).send();
      next();
  };
};