const accountId = 11811101
let accountEmail = "Sanketbunty9831@gmail.com"
var accountPaasword = "Sank1243"
accountCity = "Samastipur"

// accountId = 3

console.log(accountId);

console.table([accountEmail,accountId,accountCity,accountPaasword])

/*
Prefer not to use var, because of issue in block and functional scope
*/


accountEmail = "Sanketbunty9897@gmail.com"
accountPaasword = "Sank124321"
accountCity = "Hyderabad"

console.table([accountEmail,accountId,accountCity,accountPaasword])