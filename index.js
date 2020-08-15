/* Your Code Here */

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

function createEmployeeRecord(arr){
    return {
        firstName:arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

function createEmployeeRecords(arr){
    return arr.map(x=>createEmployeeRecord(x))
}

function createTimeInEvent(date){
    const dateArr=date.split(" ");
    const dte = dateArr[0];
    const hr = parseInt(dateArr[1]);
    const timeInEv = {type:"TimeIn", date:dte,hour:hr};
    this.timeInEvents.push(timeInEv);
    return this
}

function createTimeOutEvent(date){
    const dateArr=date.split(" ");
    const dte = dateArr[0];
    const hr = parseInt(dateArr[1]);
    const timeOutEv = {type:"TimeOut", date:dte,hour:hr};
    this.timeOutEvents.push(timeOutEv);
    return this
}

function hoursWorkedOnDate(date){
    const matchingTimeIn = this.timeInEvents.find(x=>{
        return date===x.date
    })
    const matchingTimeOut = this.timeOutEvents.find(x=>{
        return date===x.date
    })
    return ((matchingTimeOut.hour)-(matchingTimeIn.hour))/100
}

function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.call(this,date);
    const payPerHour = this.payPerHour;
    return hoursWorked*payPerHour
}

function calculatePayroll(arr){
    let total=0;
    for(const workerObj of arr){
        total+=allWagesFor.call(workerObj)
    }
    return total
}

function findEmployeeByFirstName(workersArr,firstName){
    return workersArr.find(x=>{
        return x.firstName===firstName
    })
}