var dootify = require('dootify');
var objectAssign = require('object-assign');
var loaderUtils = require('loader-utils');
var DEFAULTS = dootify.DEFAULTS;
var MINIFIER_DEFAULTS = dootify.MINIFIER_DEFAULTS;

module.exports = function(source) {
  //TODO: cache id
  //var id = require.resolve(this.resource);

  var opts = loaderUtils.parseQuery(this.query);

  opts = objectAssign({}, opts, DEFAULTS);

  if (opts.minifierOpts !== false) {
    opts.minifierOpts = objectAssign({}, opts.minifierOpts, MINIFIER_DEFAULTS);
  }

  console.log(dootify.transform(source, opts));

  return dootify.transform(source, opts);
};
