const upperCaseText = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
const lowerCaseText = 'abcdefghijklmopqrstuvxyz';
const numberText = '1234567890';
const symbolText = `~!@#$%^&*()_-+={[}]|:;"' <,>.? /`

function getRandom(text) {
    // let b = Math.floor(Math.random() * text.length);
    let a = text[Math.floor(Math.random() * text.length)];
    console.log(a);
    return a;
}
function pass(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += getRandom(upperCaseText)
        password += getRandom(lowerCaseText)
        password += getRandom(numberText)
        password += getRandom(symbolText)
    }
    return password;
}

console.log(pass(10));