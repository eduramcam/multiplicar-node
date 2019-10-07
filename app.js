/**
 * Desarrollador Eduardo Ramirez Camacho
 * Pruebas de Node Js
 * TEST CMD: node app crear listar -b 6 -l 10
 */

const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicacion');
const { argv } = require('./config/yargs');
var colors = require('colors');

console.log(`base ${argv.base} & ${argv.limite}`);

switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado ${colors.green(archivo)}`);
            })
            .catch(e => console.log(e));
        break;
    default:
        console.log('El comando no existe ');

}