var dootify = require('dootify');

module.exports = function(source) {
  var id = require.resolve(this.resource);

  return dootify.process(dootify.compile(id, source));
};
