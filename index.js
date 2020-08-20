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
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

const createEmployeeRecord = (arr) => {
  const obj = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return obj;
};

const createEmployeeRecords = (arr) => {
  let arrOfObj = [];
  arr.forEach((e) => {
    arrOfObj.push(createEmployeeRecord(e));
  });
  return arrOfObj;
};

let createTimeOutEvent = (dateStamp) => {
  let [date, hour] = dateStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
};

let createTimeInEvent = (dateStamp) => {
  let [date, hour] = dateStamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
};

let wagesEarnedOnDate = (dateSought) => {
  let rawWage = hoursWorkedOnDate.call(this, dateSought) * this.payPerHour;
  return parseFloat(rawWage.toString());
};

const hoursWorkedOnDate = (soughtDate) => {
  let inEvent = this.timeInEvents.find((e) => {
    return e.date === soughtDate;
  });

  let outEvent = this.timeOutEvents.find((e) => {
    return e.date === soughtDate;
  });

  return (outEvent.hour - inEvent.hour) / 100;
};

const findEmployeeByFirstName = (srcArray, firstName) => {
  return srcArray.find((e) => {
    return e.firstName === firstName;
  });
};

let calculatePayroll = (arrayOfEmployeeRecords) => {
  return arrayOfEmployeeRecords.reduce((memo, rec) => {
    return memo + allWagesFor.call(rec);
  }, 0);
};
