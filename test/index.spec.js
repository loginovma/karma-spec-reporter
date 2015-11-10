'use strict';
var should = require('chai').should();
var SpecReporter = require('../index')['reporter:spec'];
var formatError = function (a, b) {
  return a + b;
};
var baseReporterDecorator = function () {
  return {};
};
var config = {};
describe('SpecReporter', function () {
  describe('when initializing', function () {
    describe('and colors are not defined', function () {
      var newSpecReporter;
      beforeEach(function () {
        newSpecReporter = new SpecReporter[1](baseReporterDecorator, formatError, config);
      });
      it('SpecReporter should be defined appropriately', function () {
        SpecReporter[0].should.equal('type');
        newSpecReporter.should.be.a('object');
      });
      it('should set USE_COLORS to false', function () {
        newSpecReporter.USE_COLORS.should.equal(false);
      });
    });
  });
});