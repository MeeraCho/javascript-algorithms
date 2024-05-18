const countOccurrences = require('./count-occurrences');

test('count occurrence text', () => {
    expect(countOccurrences('Hello', 'l')).toBe(2);
    expect(countOccurrences('Hello', 'z')).toBe(0);
});