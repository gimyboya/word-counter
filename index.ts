import { cac } from 'cac';
import { extractor } from './src/Extractor';
import { counter } from './src/Counter';

const cli = cac();

cli.command('count <file>', 'count words in file').action(async (file) => {
  console.log(file);
  await extractor(file)
    .then((data) => {
      counter(data).forEach((pair) => console.log(`${pair[0]}: ${pair[1]} \n`));
    })
    .catch((e) => {
      throw new Error(e);
    });
});

// cli.option('--path <path-to-file>', 'Provide your file path');

// Display help message when `-h` or `--help` appears
cli.help();
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version('0.0.0');

cli.parse();
console.log('hello');
