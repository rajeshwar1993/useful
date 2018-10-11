//var assert = require('assert');
var should = require('chai').should();
var expect = require('chai').expect;
var useful = require('../index.js');

// import chai from "chai";
// import useful from "../index";

// var should = chai.should();
// var expect = chai.expect;

describe('Array Powers', function () {

  //************************************************************************************************
  //GENERAL TESTS
  describe('General Tests', function () {
    it('sum should be a function', () => {
      expect(typeof [].sum).to.equal('function');
    });

    it('multiply should be a function', () => {
      expect(typeof [].multiply).to.equal('function');
    });

    it('min should be a function', () => {
      expect(typeof [].min).to.equal('function');
    });

    it('max should be a function', () => {
      expect(typeof [].max).to.equal('function');
    });


  });

  //************************************************************************************************


  //************************************************************************************************

  //TEST for function: SUM()
  describe('SUM Function Tests', function () {

    it('should return zero for a zero length input array', function () {
      [].sum().should.equal(0);
    });

    it('should return the member value for a one member array', () => {
      [1].sum().should.equal(1);
    });

    it('should return the member value for a one member array when given as string', () => {
      ['1'].sum(0, true).should.equal(1);
    });

    it('should return the sum of the array', function () {
      [4, 7, 9].sum().should.equal(20);
    });

    it('should return the sum of the array with initial value: 12', function () {
      [4, 7, 9].sum(12).should.equal(32);
    });

    it('should return the sum of the array with -ve values', function () {
      [4, -7, 9].sum().should.equal(6);
    });

    it('should add whole number arrays including strings', () => {
      [-1, '2', '3.4'].sum(0, true).should.to.equal(4.4);
    });

    it('should add fractions', () => {
      [1.1, 2.2, 3].sum().should.be.closeTo(6.3, 0.0001);
    });

  });
  //************************************************************************************************


  //************************************************************************************************

  //TEST for function: MULTIPLY()

  describe('MULTIPLY Function Tests', function () {

    it('should return 1 for a 1 length input array', function () {
      [].multiply().should.equal(1);
    });

    it('should return the member value for a one member array', () => {
      [1].multiply().should.equal(1);
    });

    it('should return the member value for a one member array when given as string', () => {
      ['1'].multiply(1, true).should.equal(1);
    });

    it('should return the multiply of the array', function () {
      [4, 2, 3].multiply().should.equal(24);
    });

    it('should return the multiply of the array with initial value: 2', function () {
      [4, 2, 3].multiply(2).should.equal(48);
    });

    it('should return the multiply of the array with -ve values', function () {
      [4, -3, 3].multiply().should.equal(-36);
    });

    it('should multiply whole number arrays including strings', () => {
      [-1, '2', '3.4'].multiply(1, true).should.to.equal(-6.8);
    });

    it('should add fractions', () => {
      [2.2, 3].multiply().should.be.closeTo(6.6, 0.0001);
    });

  });
  //************************************************************************************************


  //************************************************************************************************

  //TEST for function: MIN()

  describe('MIN Function Tests', function () {

    it('should return infinity for a empty length input array', function () {
      [].min().should.equal(Infinity);
    });

    it('should return the member value for a one member array', () => {
      [1].min().should.equal(1);
    });

    it('should return the member value for a one member array when given as string', () => {
      ['1'].min().should.equal(1);
    });

    it('should return the min of the array', function () {
      [4, 2, 3].min().should.equal(2);
    });

    it('should return the min of the array with -ve values', function () {
      [4, -3, 3].min().should.equal(-3);
    });

    it('should min whole number arrays including strings', () => {
      [-1, '2', '3.4'].min().should.to.equal(-1);
    });

    it('should find min of fractions', () => {
      [2.2, 3].min().should.be.closeTo(2.2, 0.0001);
    });

    it('should find min of empty array with position', () => {
      [].min(5).should.be.equal(Infinity);
    });

    it('should find min of single length array with wrong position', () => {
      expect([4].min(4)).to.be.null;
    });

    it('should find min of array with position', () => {
      [4, 40, 43, 23, 65, 3].min(4).should.be.equal(40);
    });

  });
  //************************************************************************************************


  //************************************************************************************************

  //TEST for function: MAX()

  describe('MAX Function Tests', function () {

    it('should return -Infinity for a 0 length input array', function () {
      [].max().should.equal(-Infinity);
    });

    it('should return the member value for a one member array', () => {
      [1].max().should.equal(1);
    });

    it('should return the member value for a one member array when given as string', () => {
      ['1'].max().should.equal(1);
    });

    it('should return the max of the array', function () {
      [4, 2, 3].max().should.equal(4);
    });

    it('should return the max of the array with -ve values', function () {
      [4, -3, 3].max().should.equal(4);
    });

    it('should max whole number arrays including strings', () => {
      [-1, '2', '3.4'].max().should.to.equal(3.4);
    });

    it('should find max of  fractions', () => {
      [2.2, 3, 6.6].max().should.be.closeTo(6.6, 0.0001);
    });

    it('should find max of empty array with position', () => {
      [].max(5).should.be.equal(-Infinity);
    });

    it('should find max of single length array with wrong position', () => {
      expect([4].max(4)).to.be.null;
    });

    it('should find max of array with position', () => {
      [4, 40, 43, 23, 65, 3].max(3).should.be.equal(40);
    });


  });



});
