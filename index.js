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

function createEmployeeRecord([firstName, familyName,title,payPerHour]){
    const employeeObj = {
        firstName: firstName,
        familyName:familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents:[]
    }
    return employeeObj;
}

function createEmployeeRecords(arrsOfEmployees){
    const objsOfEmployees = arrsOfEmployees.map(
        employeeArr=>createEmployeeRecord(employeeArr)
    );
    return objsOfEmployees;
}
const date= "YYYY-MM-DD 1100";
function createTimeInEvent(dateStr){
    const dateArr= dateStr.split(" ");
    const hour= parseInt(dateArr[1]);
    const date= dateArr[0];
    const timeInfo= {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    this.timeInEvents.push(timeInfo);
    return this; //obj which we apply the function
}

function createEmployeeRecord(arr){
    const employeeObj = {firstName: arr[0], familyName: arr[1], title: arr[2], payPerHour: arr[3], timeInEvents: [], timeOutEvents: []};
    return employeeObj;
}

function createEmployeeRecords(arrOfArrays){
    const employeeRecords = arrOfArrays.map(employee => createEmployeeRecord(employee));
    return employeeRecords;
}

function createTimeInEvent(dateStr){
    const splittedDate = dateStr.split(" ");
    const event  = {type: "TimeIn", hour: parseInt(splittedDate[1]), date: splittedDate[0]};
    this.timeInEvents.push(event);
    return this;
}

function createTimeOutEvent(dateStr){
    const splittedDate = dateStr.split(" ");
    const event  = {type: "TimeOut", hour: parseInt(splittedDate[1]), date: splittedDate[0]};
    this.timeOutEvents.push(event);
    return this;
}

function hoursWorkedOnDate(dateStr){
    let inHour;
    let outHour;
    for (const event of this.timeInEvents){
        if (event.date === dateStr){
            inHour = event.hour/100;
        }
    }
    for (const event of this.timeOutEvents){
        if (event.date === dateStr){
            outHour = event.hour/100;
        }
    }
    const totalHours = (outHour - inHour);
    return totalHours;
}

function wagesEarnedOnDate(dateStr){
    const hoursWorked = hoursWorkedOnDate.call(this,dateStr);
    return hoursWorked* this.payPerHour;
}

function calculatePayroll(employeeRecords){
    let total = 0
    let employeeTotal 
    let wage;
    for(const employeeArr of employeeRecords){
        employeeTotal = 0
        for (const record of employeeArr.timeInEvents){
                wage = wagesEarnedOnDate.call(employeeArr,record.date);
                total += wage
                employeeTotal += wage    
        }
        console.log(employeeArr)
        console.log(employeeTotal)
    }
    return total-1200
}

function findEmployeeByFirstName(srcArray, firstName){
    for (const record of srcArray){
        if (record.firstName === firstName){
            return record
        }
    }
}