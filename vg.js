#!/usr/bin/env node
const { program } = require('commander');
program.version('0.0.1');
const CreateVueComponent = require('./handlers/CreateVueComponent');
const CreateVuexModule = require('./handlers/CreateVuexModule');

/**
 * Handling the vg component command
 */
program
    .command('component <filename>')
    .description('Create a Vue component')
    .option('-d, --data', 'Component should include data object')
    .option('-m, --methods', 'Component should include methods')
    .option('-s, --scss', 'Component should use SCSS')
    .option('-h, --help', 'Shows all available flags')
    .action((filename, options) => {
        // const options = program.opts();
        CreateVueComponent(filename, options);
    });

/**
 * Handling the vg vuexmod command
 */
program
    .command('vuexmod <modulename>')
    .description('Creates a Vuex module')
    .action(modulename => {
        CreateVuexModule(modulename);
    });

program.parse(process.argv);