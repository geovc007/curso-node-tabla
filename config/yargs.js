const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: "base a mulriplicar"
                })
                .option('l', {
                    alias: 'listar',
                    type: 'number',
                    demandOption: true,
                    default: false,
                    describe: "listar tabla"
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b))
                    {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;