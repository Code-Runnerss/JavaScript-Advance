const accountID = 1222
let accountEmail = 'example@gmail.com'
var accountPassword = '12345678'
accountCity = 'New York'   
let accountState;

// accountID = 2 // not allowed
accountEmail = 'hc@gamil.com'
accountPassword = '123456789'
accountCity = 'Los Angeles' // not allowed

/* prefere not to use var because of issue in block scope and functional scope*/
console.log(accountID)
console.table([accountID,accountEmail, accountPassword, accountCity, accountState])