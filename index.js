const moment = require("moment")
const chalk = require("chalk")

let date = moment().format("LLLL")
let numDate = moment().format("DDD")
let midnight = moment().startOf("day")
let sec = parseInt(moment().diff(midnight) / 1000)

let isDaylight = "is not"
let isLeapYear = "is not"

if (moment().isDST()) {
  isDaylight = "is"
}

if (moment().isLeapYear()) {
  isLeapYear = "is"
}

// Set colors
date = chalk.hex("#7197A2").bold(date)
numDate = chalk.hex("#A2789D").bold(`${numDate}th`)
sec = chalk.hex("#7DAAA2").bold(sec)
isDaylight = chalk.hex("#8BA163").bold(isDaylight)
isLeapYear = chalk.hex("##A24946").bold(isLeapYear)

console.log(`It is ${date}.`)
console.log(`It is ${numDate} day of the year.`)
console.log(`It is ${sec} seconds into the day.`)
console.log(`It ${isDaylight} during Daylight Savings Time.`)
console.log(`It ${isLeapYear} a leap year.`)
