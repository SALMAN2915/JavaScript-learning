const accountId = 144553
let accountEmail = "sal@gmail.com"
var accountPassword ="12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2 // not allowed

accountEmail = "s@gmail"
var accountPassword="21212121"
accountCity ="LU"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword, accountCity, accountState]);
