const opts_equals = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts_equals)
    .command('crear', 'Crea el archivo de la tabla de multimplicar', opts_equals)
    .help()
    .argv;

module.exports = {
    argv
}