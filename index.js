// produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.
function produceDrivingRange(distance){
  const func = function (origin, destination) {
    origin = Number.parseInt(origin.split('th'))
    destination = Number.parseInt(destination.split('th'))
    let outcome = ''
    outcome = (Math.abs(destination - origin) > distance)
      ? `${Math.abs(Math.abs(origin - destination)- distance)} blocks out of range`
      :`within range by ${Math.abs(Math.abs(origin - destination)- distance)}`
      return outcome
  }
  return func
}
   
// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
function produceTipCalculator(percent){
  const func = fare => fare * percent
  return func
}
// createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

function createDriver(){
  let DriverID = 0
  class Driver {
    constructor(name) {
      this.name  = name
      this.id = ++DriverID
    }
  }
  return Driver
}