/* Your Code Here */
function createEmployeeRecord(array){
    return {firstName:array[0],
        familyName:array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
} 

function createEmployee(array){
    return array.map(createEmployeeRecord);
}

function createEmployeeRecords(array){
    return array.map(createEmployeeRecord);
}

function createTimeInEvent(timestamp){
    let [date, hour] = timestamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10), 
        date: date
    })
    return this
}

function createTimeOutEvent(timestamp) {
    let [date, hour] = timestamp.split(" ");
    this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour,10),
    date: date
    });
    return this;
}

function hoursWorkedOnDate (timestamp) { 
    let inTime = this.timeInEvents.find(function(e){
        return e.date === timestamp
    })

    let outTime = this.timeOutEvents.find(function(e){
       return e.date === timestamp
    })

    return (outTime.hour - inTime.hour) / 100
}

function wagesEarnedOnDate(date) {
    let rate = this.payPerHour
    let hours = hoursWorkedOnDate.call(this,date)
    return rate * hours
}

function calculatePayroll(array) {
    let payroll = array.reduce(function(total, rec) {
        return allWagesFor.call(rec) + total
    }, 0)
    return payroll
}
function findEmployeeByFirstName (array,name){
    let employee = array.find(function(e) {
        return e.firstName === name
    })
    return employee   
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

