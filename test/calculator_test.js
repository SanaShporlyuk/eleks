import calculator from '../calculator.js';
import { assert } from 'chai';

describe('Calculator', function () {

    describe('should pass', function () {
        it('division', function () {
            assert.equal(calculator(2, 2, '/'), 1);
        });

        it('multiplication', function () {
            assert.equal(calculator(2, 2, '*'), 4);
        });

        it('multiplication with 0', function () {
            assert.equal(calculator(2, 0, '*'), 0);
        });

        it('subtraction', function () {
            assert.equal(calculator(12, 3, '-'), 9);
        });

        it('subtraction from smaller number', function () {
            assert.equal(calculator(2, 3, '-'), -1);
        });

        it('subtraction negative numbers', function () {
            assert.equal(calculator(-2, -3, '-'), 1);
        });

        it('adding', function () {
            assert.equal(calculator(2, 3, '+'), 5);
        });

        it('adding with 0', function () {
            assert.equal(calculator(0, 5, '+'), 5);
        });

        it('adding negative numbers', function () {
            assert.equal(calculator(-10, -5, '+'), -15);
        });
    });

    describe('should fail', function () {
        it('division by zero', function () {
            assert.throws(() => calculator(2, 0, '/'), 'Division by zero');
        });

        it('wrong operator', function () {
            assert.throws(() => calculator(2, 0, 'a'), 'Unsupported operator');
        });

        it('wrong input', function () {
            assert.throws(() => calculator('2', '0', '/'), 'Input should be a number');
        });

        /*it('max value', function () {
            assert.throws(() => calculator(Number.MAX_VALUE, 10, '+'), 'Input should be a number');
        });*/
    });

});
