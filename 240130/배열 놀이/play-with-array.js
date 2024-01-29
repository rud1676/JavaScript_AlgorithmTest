const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function (line) {
    lines.push(line);
}).on('close', function () {
    const [n, q] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);

    for (let i = 2; i < 2 + q; i++) {
        const [operation, a, b] = lines[i].split(' ').map(Number);
        switch (operation) {
            case 1:
                console.log(arr[a - 1]);
                break;
            case 2:
                const index = arr.indexOf(a);
                console.log(index === -1 ? 0 : index + 1);
                break;
            case 3:
                console.log(arr.slice(a - 1, b).join(' '));
                break;
        }
    }
    process.exit();
});