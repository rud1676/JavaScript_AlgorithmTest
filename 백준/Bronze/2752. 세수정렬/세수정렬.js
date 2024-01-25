const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const numbers = line.split(' ').map(Number).sort((a, b) => a - b);
  console.log(numbers.join(' '));
}).on('close', function() {
  process.exit();
});