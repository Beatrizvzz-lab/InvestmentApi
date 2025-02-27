"use strict";
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Transforma arquivos .ts e .tsx
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'], // Extensões de arquivos que o Jest deve entender
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json', // Certifique-se de que o tsconfig.json esteja configurado corretamente
        },
    },
};
