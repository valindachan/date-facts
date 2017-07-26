const moment = require("moment")
const chalk = require("chalk")

let date = chalk.hex("#7197A2").bold(moment().format("LLLL"))
let numDate = chalk.hex("#A2789D").bold(moment().format("DDD")) // Another way is moment().dayOfYear()
let midnight = moment().startOf("day")
let sec = chalk.hex("#7DAAA2").bold(parseInt(moment().diff(midnight) / 1000))

let isDaylight = chalk.hex("#8BA163").bold("is not")

let isLeapYear = chalk.hex("##A24946").bold("is not")

if (moment().isDST()) {
  isDaylight = chalk.hex("#8BA163").bold("is")
}

if (moment().isLeapYear()) {
  isLeapYear = chalk.hex("##A24946").bold(isLeapYear)
}

console.log(`It is ${date}.`)
console.log(`It is ${numDate} day of the year.`)
console.log(`It is ${sec} seconds into the day.`)
console.log(`It ${isDaylight} during Daylight Savings Time.`)
console.log(`It ${isLeapYear} a leap year.`)
