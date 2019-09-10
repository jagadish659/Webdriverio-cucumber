var config = {
    specs: [
        './test/features/**/*.feature'
    ],
    exclude: [],
    runner: 'local',
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
    }],
    services: ['selenium-standalone'],
    skipSeleniumInstall: false,
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://jsonplaceholder.typicode.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./test/step_definitions/**/*.js'],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source URIs
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tagExpression: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 70000,      // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
    before: () => {
        const chai = require('chai');
        global.assert = chai.assert;
    }
};

exports.config = config;
