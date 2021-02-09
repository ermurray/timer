let times = process.argv.slice(2,);
const timer = function(times) {
  if (times.length === 0) {
    console.log('no input');
    return;
  }
  times.sort((a, b) => a - b);
  let time = 0;
  times.forEach((t, i) => {
    if (!(t < 0) || !(Number(t))) {
      time = t * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write(`${t} `);
      },time);
    }
  });
};

timer(times);