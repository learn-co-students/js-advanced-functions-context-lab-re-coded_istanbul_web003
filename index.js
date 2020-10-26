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


function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    }
    
    function createEmployeeRecords(arrayOfArray) {
        return arrayOfArray.map(createEmployeeRecord)
    }
    
    
    function createTimeInEvent(dateStamp) {
      // let time = dateStamp.split(' ')
       this.timeInEvents.push({
         type: "TimeIn", 
            hour: parseInt(dateStamp.split(' ')[1]),
            date: dateStamp.split(' ')[0]
         })
         return this
    }
    
    function createTimeOutEvent(dateStamp) {
        // let time = dateStamp.split(' ')
         this.timeOutEvents.push({
             type: "TimeOut", 
              hour: parseInt(dateStamp.split(' ')[1]),
              date: dateStamp.split(' ')[0]
           })
           return this
      }
    
      function hoursWorkedOnDate(dateStamp){
       let timeIn = this.timeInEvents.find(day => day.date ===dateStamp);
       let timeOut = this.timeOutEvents.find(day => day.date ===dateStamp);
       return ( timeOut.hour - timeIn.hour) /100
      }
    
      function wagesEarnedOnDate(dateStamp){
       let hoursDay = hoursWorkedOnDate.call(this, dateStamp);
       return hoursDay * this.payPerHour
      }
    
      function findEmployeeByFirstName(array, name) {
       return array.find(x => x = name)
      }
    
      function calculatePayroll(array){
        return array.reduce((memo, record) => {
            return memo + allWagesFor.call(record);
          }, 0);
      }
    