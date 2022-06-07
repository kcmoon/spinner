let timer = 0

const symbols = ['|', '/', '-', '|', '-', '\\', '|'];

for (let symbol of symbols) {
  timer += 200
  setTimeout(() => {
    process.stdout.write(`\r${symbol}    `);
  }, timer);
};