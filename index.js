/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(empData) {
    const empObj = {
        firstName: empData[0], 
        familyName: empData[1],
        title: empData[2],
        payPerHour: empData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return empObj;
}

function createEmployeeRecords(empData) {
    return empData.map(emp => createEmployeeRecord(emp));
}

function createTimeInEvent(stamp){
    
    const stampArr= stamp.split(" ");
    const hour= parseInt(stampArr[1]);
    const date= stampArr[0];
    const timeInfo= {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    this.timeInEvents.push(timeInfo);
    return this;
}

function createTimeOutEvent(stamp){
    const stampArr= stamp.split(" ");
    const hour= parseInt(stampArr[1]);
    const date= stampArr[0];
    const timeInfo= {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    this.timeOutEvents.push(timeInfo);
    return this;
}

function hoursWorkedOnDate(date){
    const dayStart= this.timeInEvents.find(time=> time.date===date);
    const dayEnd= this.timeOutEvents.find(time=> time.date===date);
    const startH = dayStart.hour;
    const endH = dayEnd.hour;
    const workInHour= (endH - startH)/100;
    return workInHour;
}

function wagesEarnedOnDate(date){
    const dailyH= hoursWorkedOnDate.call(this,date);
    const pay= dailyH*this.payPerHour;
    return pay;
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function findEmployeeByFirstName(arr, fName){
    for (const emp of arr){
        emp.fName===fName;
        return emp;
    }
     return undefined;
}

function calculatePayroll(empArr){
    const pay = empArr.reduce((acc, curr) => acc += allWagesFor.call(curr),0);
    return pay;
}