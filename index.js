const moment = require("moment")
const chalk = require("chalk")

let date = moment().format("LLLL")
date = chalk.hex("#7197A2").bold(date)

let numDate = moment().format("DDD")
numDate = chalk.hex("#A2789D").bold(`${numDate}th`)

// let sec = moment().format("ssssssss") // fix this
// let sec = moment().format("ssss") // fix this
// let sec = moment().seconds()
let start = moment().startOf("day")
// end.from(start, true)
sec = moment().from(start, true)
sec = chalk.hex("#7DAAA2").bold(sec)

let isDaylight = "is not"
let isLeapYear = "is not"

if (moment().isDST()) {
  isDaylight = "is"
}
isDaylight = chalk.hex("#8BA163").bold(isDaylight)

if (moment().isLeapYear()) {
  isLeapYear = "is"
}
isLeapYear = chalk.hex("##A24946").bold(isLeapYear)

console.log(`It is ${date}.`)
console.log(`It is ${numDate} day of the year.`)
console.log(`It is ${sec} seconds into the day.`)
console.log(`It ${isDaylight} during Daylight Savings Time.`)
console.log(`It ${isLeapYear} a leap year.`)
