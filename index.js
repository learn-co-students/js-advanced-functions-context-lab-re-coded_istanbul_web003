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
    const obj = {};
    obj["firstName"] = arr[0];
    obj["familyName"] = arr[1];
    obj["title"] = arr[2];
    obj["payPerHour"] = arr[3];
    obj["timeInEvents"] = [];
    obj["timeOutEvents"] = [];
    return obj

}
function createEmployeeRecords(arrOfArr) {
    return arrOfArr.map(a => createEmployeeRecord(a))
    
}
function createTimeInEvent(dateStamp) {
    let[date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date
    })
    return this
}
function createTimeOutEvent(dateStamp) {
    let[date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date
    })
    return this
}
function hoursWorkedOnDate(soughtDate) {
    let inEvent = this.timeInEvents.find(t => t.date === soughtDate)
    let outEvent = this.timeOutEvents.find(t => t.date === soughtDate)
    return (outEvent.hour - inEvent.hour) / 100
    
}
function wagesEarnedOnDate(soughtDate) {
    return Math.round(hoursWorkedOnDate.call(this,soughtDate) * this.payPerHour)    
    
}
function findEmployeeByFirstName(records, name) {
    let res = records.filter(r => r.firstName === name)
    return res[0]
}
function calculatePayroll(records) {
    return records.reduce((acc, cur)=> acc + allWagesFor.call(cur),0)
}
/*
cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
createTimeInEvent.call(cRecord, "44-03-15 0900")
createTimeOutEvent.call(cRecord, "44-03-15 1100")
console.log(hoursWorkedOnDate.call(cRecord, "44-03-15"))

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
        createTimeInEvent.call(cRecord, "44-03-15 0900")
        createTimeOutEvent.call(cRecord, "44-03-15 1100")
        console.log(wagesEarnedOnDate.call(cRecord, "44-03-15")) 

        let src = [
            ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
            ["Natalia", "Romanov", "CEO", 150]
          ]
          let emps = createEmployeeRecords(src)
          let loki = findEmployeeByFirstName(emps, "Loki")
          console.log(loki.familyName)*/
