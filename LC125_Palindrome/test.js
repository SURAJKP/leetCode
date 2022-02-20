const palindrome = require('./index');

test( "checking palindrome toBeTruthy", () => {
    expect(palindrome('aba')).toBeTruthy();
});

test( "checking palindrome toBeFalsy", () => {
    expect(palindrome('abc')).toBeFalsy();
});

test( "checking palindrome", () => {
    expect(palindrome("A man, a plan, a canal: Panama")).toBeTruthy();
});
