var chai = require('chai');
chai.config.includeStack = true;
var assert = chai.assert;
var jsdom = require('jsdom').jsdom;

var testUtils = require('./util/testUtils');
testUtils.setupLocales('eval');
var Eval = require(testUtils.buildPath('/eval/eval'));
var EvalText = require(testUtils.buildPath('/eval/evalText'));
var EvalMulti = require(testUtils.buildPath('/eval/evalMulti'));
var EvalTriangle = require(testUtils.buildPath('/eval/evalTriangle'));


describe('getTextStringsFromObject_', function () {
  before(function () {
    // For some reason, this wasn't working properly if done at the top of the file.
    global.document = jsdom('<html><head></head><body><svg id="svg"></svg></body></html>');
  });

  it('from simple text object', function () {
    var evalObject = new EvalText('mytext', 14, 'red');
    assert.deepEqual(Eval.getTextStringsFromObject_(evalObject), ['mytext']);
  });

  it('single string in a multi object', function () {
    var triangle = new EvalTriangle(50, 'solid', 'red');
    var text = new EvalText('math is FUN', 18, 'blue');
    var multi = new EvalMulti(triangle, text);
    assert.deepEqual(Eval.getTextStringsFromObject_(multi), ['math is FUN']);
  });

  it('multiple strings in a multi object', function () {
    var text1 = new EvalText('i like math', 18, 'blue');
    var text2 = new EvalText('i like math more', 18, 'blue');
    var multi = new EvalMulti(text1, text2);
    assert.deepEqual(Eval.getTextStringsFromObject_(multi), [
      'i like math', 'i like math more']);
  });

  it('from nested multis', function () {
    var child1 = new EvalMulti(
      new EvalText('one', 12, 'red'),
      new EvalText('two', 12, 'red'));
    var child2 = new EvalMulti(
      new EvalText('three', 12, 'red'),
      new EvalText('four', 12, 'red'));
    var multi = new EvalMulti(child1, child2);
    assert.deepEqual(Eval.getTextStringsFromObject_(multi), [
      'one', 'two', 'three', 'four']);
  });
});

describe('haveCaseMismatch_', function () {
  before(function () {
    // For some reason, this wasn't working properly if done at the top of the file.
    global.document = jsdom('<html><head></head><body><svg id="svg"></svg></body></html>');
  });

  it('reports false for different text', function () {
    var text1 = new EvalText('one', 12, 'red');
    var text2 = new EvalText('two', 12, 'red');

    assert.equal(Eval.haveCaseMismatch_(text1, text2), false);
  });

  it('reports false for identical text', function () {
    var text1 = new EvalText('one', 12, 'red');
    var text2 = new EvalText('one', 12, 'red');

    assert.equal(Eval.haveCaseMismatch_(text1, text2), false);
  });

  it('reports true for case mismatched text', function () {
    var text1 = new EvalText('one', 12, 'red');
    var text2 = new EvalText('ONE', 12, 'red');

    assert.equal(Eval.haveCaseMismatch_(text1, text2), true);
  });

  it('reports false when different number of strings', function () {
    var obj1 = new EvalMulti(
      new EvalText('one', 12, 'red'),
      new EvalText('two', 12, 'red'));
    var obj2 = new EvalText('ONE', 12, 'red');
    assert.equal(Eval.haveCaseMismatch_(obj1, obj2), false);
  });

  it('reports false when we have a mismatch and a wrong string', function () {
    var obj1 = new EvalMulti(
      new EvalText('one', 12, 'red'),
      new EvalText('two', 12, 'red'));
    var obj2 = new EvalMulti(
      new EvalText('ONE', 12, 'red'),
      new EvalText('not two', 12, 'red'));

    assert.equal(Eval.haveCaseMismatch_(obj1, obj2), false);
  });
});
