// Importeer de nodige modules (CommonJS-stijl)
const js = require("@eslint/js");
const pluginJest = require("eslint-plugin-jest");
const globals = require("globals");

// Exporteer de configuratie als een array
module.exports = [
    // 1. De "eslint:recommended" basisregels
    js.configs.recommended,

    // 2. De "jest" plugin regels, maar *alleen* voor testbestanden
    {
        files: ["**/*.test.js"], // Pas dit alleen toe op bestanden die eindigen op .test.js
        ...pluginJest.configs['flat/recommended'], // Gebruik de aanbevolen Jest-regels
        languageOptions: {
            globals: {
                ...globals.jest, // Voeg alle Jest-specifieke globals toe (zoals 'test', 'expect')
            },
        },
    },

    // 3. Jouw globale regels voor het hele project
    {
        languageOptions: {
            ecmaVersion: 'latest', // Gebruik de nieuwste JavaScript-versie
            sourceType: 'commonjs', // Vertel ESLint dat je `require` gebruikt (belangrijk!)
            globals: {
                ...globals.node, // Voeg alle Node.js-specifieke globals toe (zoals 'process', '__dirname')
            },
        },
        rules: {
            "no-unused-vars": "warn", // Geef een waarschuwing voor ongebruikte variabelen
            "no-console": "off",      // Sta `console.log` toe (handig voor een demo-app)
        },
    },
];
