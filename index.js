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
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    }
    
    function createEmployeeRecords(arr) {
        return arr.map(createEmployeeRecord)
    }
    
    
    function createTimeInEvent(dateStamp) {
      
       this.timeInEvents.push({
         type: "TimeIn", 
            hour: parseInt(dateStamp.split(' ')[1]),
            date: dateStamp.split(' ')[0]
         })
         return this;
    }
    
    function createTimeOutEvent(dateStamp) {
         this.timeOutEvents.push({
             type: "TimeOut", 
              hour: parseInt(dateStamp.split(' ')[1]),
              date: dateStamp.split(' ')[0]
           })
           return this;
      }
    
      function hoursWorkedOnDate(dateStamp){
        
       let inTime =this.timeInEvents.find(day => day.date === dateStamp);
       
       let outTime = this.timeOutEvents.find(day=> day.date ===dateStamp);
       
       return (outTime.hour -inTime.hour) /100;
       
      }
    
      function wagesEarnedOnDate(dateStamp){
        
       let hoursDaily = hoursWorkedOnDate.call(this, dateStamp);
       return hoursDaily * this.payPerHour
      }
    
      function findEmployeeByFirstName(array, name) {
       return array.find(e=> e.firstName === name)
      }
    
      function calculatePayroll(array){
        
        return array.reduce((acc, curr) => {
            return acc + allWagesFor.call(curr);
          }, 0);
      }