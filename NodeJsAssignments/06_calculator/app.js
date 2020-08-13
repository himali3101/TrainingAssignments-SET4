var sum = require('./operations/sum')
var subs = require('./operations/substraction')
var mult = require('./operations/multiplication')
var div = require('./operations/divide')
var datenTime = require('./moment/moment')


var num1 = +process.argv[2]
var num2 = +process.argv[3]

console.log("Today is : " + datenTime())

console.log("The sum is" + sum(num1, num2));

console.log("The substraction is: " + subs(num1, num2));

console.log("The multiplication is: " + mult(num1, num2));

console.log("The division is: " + div(num1, num2));

