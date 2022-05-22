function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents : [],
        timeOutEvents : []
    }
}
function createEmployeeRecords(records) {
return records.map(createEmployeeRecord)
}
function createTimeInEvent(timeStamp){
    const timeInObject = {
        type: "TimeIn",
        date: timeStamp.split(" ")[0],
        hour: parseInt(timeStamp.slice(-4), 10)
    }
    this.timeInEvents.push(timeInObject)
    return this;
}
function createTimeOutEvent(timeStamp){
    const timeOutObject = {
        type: "TimeOut",
        date: timeStamp.split(" ")[0],
        hour: parseInt(timeStamp.slice(-4), 10)
    }
    this.timeOutEvents.push(timeOutObject)
    return this;
}
function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find((day) => date === day.date)
    const timeOut = this.timeOutEvents.find((day) => day.date)
    return(timeOut.hour - timeIn.hour) /100;
}
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}
function calculatePayroll(array){
    let payroll = array.reduce((acc, current) => {
        return acc + allWagesFor.call(current)
    }, 0);
    return calculatePayroll
}
function findEmployeeByFirstName(arr, firstName){
    let employee = arr.find((record) => record.firstName === firstName)
    return employee
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