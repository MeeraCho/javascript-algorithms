const reverseString = require('./reverse-string');

describe('reverse-string', () => {
    it('should be a function', () => {
        expect(typeof reverseString).toEqual('function'); //function itself
    });

    it('should return a string', () => {
        expect(typeof reverseString('hello')).toEqual('string'); //after invoking the function
    });

    it('should return the reversedstring', () => {
        expect(reverseString('hello')).toEqual('olleh'); 
        expect(reverseString('bye')).toEqual('eyb'); 
        expect(reverseString('wow')).toEqual('wow'); //palindrome 팔른즈롬
        expect(reverseString('hello world')).toEqual('dlrow olleh'); 
    });
});