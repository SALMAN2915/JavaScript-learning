const name = "Salman"
const repoCount = 50

// console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Salman')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

const newStringone = "     salman   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://www.google.com/"

console.log(url.replace('com','in'))

console.log(url.includes('google'))

console.log(gameName.split('l'));