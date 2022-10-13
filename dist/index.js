"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holaAlCursoNPM = exports.holaPersonalizado = exports.hola = void 0;
const hola = () => {
    console.log('Hola mundo!!!');
    return 1;
};
exports.hola = hola;
const holaPersonalizado = (nombre) => {
    console.log(`Hola ${nombre}`);
    return 1;
};
exports.holaPersonalizado = holaPersonalizado;
const holaAlCursoNPM = () => {
    console.log('Hola al curso de NPM!!');
    return 1;
};
exports.holaAlCursoNPM = holaAlCursoNPM;
