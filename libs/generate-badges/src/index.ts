// export * from './lib/generate-badges';
import { Command } from 'commander';
import { generateBadges } from './lib/generate-badges';

const program = new Command();

program
  .name('generate-badges')
  .description('Generates SVG Badges from coverage');

program
  .argument('<string>', 'File input')
  .option('-o --output <string>', 'File output')
  .action((file, options) => {
    console.log(file);
    console.log(options);

    generateBadges(file, options.output);
  });

// .requiredOption('-f, --file', 'Coverage summary location');

program.parse();
