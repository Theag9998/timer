//need to get access to the arguments in node
const args = process.argv.slice(2);

//copy the array and then sort it
const numOfAlarms = [...args];
const alarmTime = numOfAlarms.sort((a, b) => (a - b));
//console.log(alarmTime)

//loop through the alarm times to update a time
let time = alarmTime[0];
for (let alarm of alarmTime) {

  //if input is not negative number or is not a number ignore/ skip
  if (alarm !== isNaN && alarm > 0) {
    //dont want first alarm time to be repeated
    if (alarm !== alarmTime[0]) {
      time = alarm;
    }
    //set timer to go off at setTimeout
    setTimeout(() => {
      process.stdout.write('.\n');
    }, (time * 1000));
  }
}


