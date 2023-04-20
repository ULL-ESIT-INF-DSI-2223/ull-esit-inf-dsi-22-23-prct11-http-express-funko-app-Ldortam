import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command({
    ls: {
        description: 'Nombre de usuario',
        type: 'string',
        demandOption: false
    }
  } , (argv) => {

  })

  .help()
  .argv;