/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeData){
    const obj = {
        firstName: employeeData[0], 
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj;
}

function createEmployeeRecords(employeeData){
    return employeeData.map(singleData => createEmployeeRecord(singleData))
}

function createTimeInEvent(date){
    const splittedDate = date.split(" ");
    const data = {
        type: "TimeIn",
        date: splittedDate[0],
        hour: parseInt(splittedDate[1])
    }
    this.timeInEvents.push(data);
    return this;
}

function createTimeOutEvent(date){
    const splittedDate = date.split(" ");
    const data = {
        type: "TimeOut",
        date: splittedDate[0],
        hour: parseInt(splittedDate[1])
    }
    this.timeOutEvents.push(data);
    return this;
}

function hoursWorkedOnDate(givenDate){
    const timeIn = this.timeInEvents.find(i => i.date === givenDate)
    const timeOut = this.timeOutEvents.find(o => o.date === givenDate)
    console.log(timeOut.hour - timeIn.hour)
    const result = (timeOut.hour - timeIn.hour) / 100;
    return result;
}

function wagesEarnedOnDate(givenDate){
   const totalHour = hoursWorkedOnDate.call(this,givenDate);
   return this.payPerHour*totalHour
}

let allWagesFor = function (){
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    for(const person of srcArray){
        if(person.firstName === firstName){
            return person;
        } else{
            return undefined
        }
    }
}

function calculatePayroll(employeeData){
    return employeeData.reduce((acc, curr) => acc + allWagesFor.call(curr), 0);
}