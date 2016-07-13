/* global require, module */

const Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const compileSass = require('broccoli-sass');
const mergeTrees = require('broccoli-merge-trees');
const _ = require('lodash');
const glob = require('glob');

module.exports = function(defaults) {
  var appTree = new Angular2App(defaults, {
    sassCompiler: {
      includePaths: [
        'src/styles'
      ]
    },
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'angularfire2/**/*.js',
      'firebase/*.js'
    ]
  });

  var sass = mergeTrees(_.map(glob.sync('src/**/*.scss'), function(sassFile) {
    sassFile = sassFile.replace('src/', '');
    return compileSass(['src'], sassFile, sassFile.replace(/.scss$/, '.css'));
  }));

  return mergeTrees([appTree, sass], { overwrite: true });
};
