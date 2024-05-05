const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzbuzz).toEqual('function');
    });

    it('should return the number if not divisible by 3 or 5', () => {
        expect(fizzbuzz(1)).toEqual(1);
        expect(fizzbuzz(13)).toEqual(13);
        expect(fizzbuzz(17)).toEqual(17);
    });

    it('should return Fizz if not divisible by 3', () => {
        expect(fizzbuzz(3)).toEqual('Fizz');
        expect(fizzbuzz(6)).toEqual('Fizz');
        expect(fizzbuzz(12)).toEqual('Fizz');
    });

    it('should return Buzz if not divisible by 5', () => {
        expect(fizzbuzz(5)).toEqual('Buzz');
        expect(fizzbuzz(10)).toEqual('Buzz');
        expect(fizzbuzz(20)).toEqual('Buzz');
    });

    it('should return FizzBuzz if not divisible by 3 & 5', () => {
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
        expect(fizzbuzz(30)).toEqual('FizzBuzz');
        expect(fizzbuzz(45)).toEqual('FizzBuzz');
    });
})