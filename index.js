/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => {
    return {
       firstName,
       familyName,
       title,
       payPerHour,
       timeInEvents : [],
       timeOutEvents : []
   }
}

const createEmployeeRecords = (employeeRecords) => {
   return employeeRecords.map(createEmployeeRecord);
   
}

const createTimeInEvent = (record, timeStamp) => {

   const timeObj = {
       type: "TimeIn",
       date: timeStamp.split(" ")[0],
       hour: parseInt(timeStamp.slice(-4), 10)
   }
   record.timeInEvents.push(timeObj)
   return record
}

const createTimeOutEvent = (record, timeStamp) => {

   const timeObj = {
       type: "TimeOut",
       date: timeStamp.split(" ")[0],
       hour: parseInt(timeStamp.slice(-4), 10)
   }
   record.timeOutEvents.push(timeObj)
   return record
}

const hoursWorkedOnDate = (record, date) => {
   const timeIn = record.timeInEvents.find(e => {
       return e.date === date
   }).hour
   const timeOut = record.timeOutEvents.find(e => {
       return e.date === date
   }).hour
   debugger
   return (timeOut - timeIn) / 100
}

const wagesEarnedOnDate = (record, date) => {
   return hoursWorkedOnDate(record, date) * record.payPerHour
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const calculatePayroll = (arr) => {
    const totalPay = arr.reduce((acc, record) => {
        const totalPayForEmployee = allWagesFor(record)
        return acc + totalPayForEmployee
    }, 0)
    return totalPay
  }