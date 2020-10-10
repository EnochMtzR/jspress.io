const { resolve } = require('path');
const fs = require('fs');
const chalk = require('chalk');

console.log(chalk.green('Cleanning Project...'));

fs.rmdir(resolve(__dirname, '../dist'), { recursive: true }, () => {});
fs.rmdir(resolve(__dirname, '../build'), { recursive: true }, () => {});
