const palindrome = require('./index');

test( "checking palindrome toBeTruthy", () => {
    expect(palindrome('aba')).toBeTruthy();
});

test( "checking palindrome toBeFalsy", () => {
    expect(palindrome('abc')).toBeFalsy();
});