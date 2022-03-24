//Create a stopwatch object that has four properties and three methods
const stopwatch = {
  hours: 5,
  minutes: 25,
  seconds: 30,
  isRunning: true,
  stop () {this.isRunning = false},
  start () {this.isRunning = true},
  reset () { 
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
   }
}

