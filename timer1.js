

const wait = process.argv.slice(2);
const time = function(wait) {
  if (wait.length <= 0 || wait === undefined) {
    return `Please input a number`;
  }
  wait.map(num => Number(num));
  let filtered =  wait.filter((input) => {
    return (input >= 0 &&  !isNaN(input));
    // };
  });
  for (let value of filtered) {
    console.log(value * 1000);
    setTimeout(function() {
      return  process.stdout.write('\x07');
    }, value * 1000);
  }
};

time(wait);





//another way

// const setTimer = (alarm) => {
//   setTimeout(() => {
//     process.stdout.write('.  ');
//   }, alarm * 1000);

// const timer = () => {
//   let alarms = process.argv.slice(2);
//   for (let count of alarms) {
//     if (count > 0 && !isNaN(count)) {
//       setTimer(count);
//     }
//   }
// };

// timer();

//another way

// const timer = args => {
//   args = process.argv.slice(2);
//   args.forEach(input => {
//     if (Number(input) > 0) {
//       setTimeout(() => {
//         process.stdout.write('\007');
//       }, Number(input) * 1000);
//     }
//   });

// };
// timer();