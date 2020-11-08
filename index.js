function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName : firstName,
        familyName : familyName,
        title : title,
        payPerHour : payPerHour,
        timeInEvents : [],
        timeOutEvents : []
    }
}

function createEmployees(employees) {
    return employees.map(employee => {
        return createEmployeeRecord(employee)
    })
}

function createEmployeeRecords(employees) {
    let employeeRecords = []
    for(let i = 0; i<employees.length ; i++) {
        employeeRecords.push(createEmployeeRecord(employees[i]))
    }
    return employeeRecords
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