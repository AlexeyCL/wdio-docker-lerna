const execSync = require('child_process').exec;

exports.config = {

    specs: [ './specs/*.js'
    ],

    maxInstances: 10,

    capabilities: [
        {
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--window-size=1920,1080', '--incognito', '-–ignore-certificate-errors', '--headless'],
            },
        },
    ],

    logLevel: 'info',


    bail: 0,

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,
    dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: 'http://localhost:4444',
        options: {
            p: ['4444:4444'],
            shmSize: '2g'
        }
    },

    services: ['docker'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
