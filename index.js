/* Your Code Here */

const createEmployeeRecord = (arr) => {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = (arrayOfArrays) => {
  return arrayOfArrays.map((arr) => createEmployeeRecord(arr));
};

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });

  return this;
}

function hoursWorkedOnDate(dateStamp) {
  const checkIn = this.timeInEvents.find((time) => time.date === dateStamp);
  const checkOut = this.timeOutEvents.find((time) => time.date === dateStamp);
  return (checkOut.hour - checkIn.hour) / 100;
}

function wagesEarnedOnDate(dateStamp) {
  const payOwed = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
  return parseFloat(payOwed.toString());
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map((e) => e.date);

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

const findEmployeeByFirstName = (srcArray, firstName) => {
  return srcArray.find((e) => e.firstName === firstName);
};

function calculatePayroll(records) {
  return records.reduce((acc, cur) => acc + allWagesFor.call(cur), 0);
}
