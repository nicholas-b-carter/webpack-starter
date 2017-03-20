const path = require('path');

module.exports = [
    {
        name: 'cordova',
        path: './client/app/app.ts',
        template: './client/app/app.html',
        filename: 'index.html',
        isCordovaApp: true,
        chunks: ['vendor-cordova', 'cordova']
    }];
