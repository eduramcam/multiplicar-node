// requireds 

const fs = require('fs');
var colors = require('colors');
//const fs = require('express'); los paquetes que no son nativos de node 
//const fs = require('./fs'); los que nosotros definimos en el proyecto 

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        reject(`La base ingresada [${base}] no corresponde a un numero `);
        return;
    }
    if (!Number(limite)) {
        reject(`El limite [${limite}] no corresponde a un numero `);
        return;
    }

    console.log('=================================='.green);
    console.log(` Impresion de la tabla ${base} `.green);
    console.log('=================================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let contenido = '';

        if (!Number(base)) {
            reject(`El parametro ingresado [${base}] no corresponde a un numero `);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            contenido = contenido + `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/tabla${base}-al-${limite}.txt`, contenido, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`tabla${base}-al-${limite}.txt`);
        });

    });
}



module.exports = {
    crearArchivo,
    listarTabla
}