var dootify = require('dootify/process');

module.exports = function(source) {
  //TODO: cache id
  //var id = require.resolve(this.resource);

  this.callback(null, dootify(source));
};
