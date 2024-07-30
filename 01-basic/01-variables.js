const accountId = 143556
let accountEmail = "abcd@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;

//accountId = 2//   not allowed
accountEmail = "fghj@gmail.com"
accountPassword = "7689"
accountcity = "karachi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

        //Another console method//
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])