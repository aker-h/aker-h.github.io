const path = require('path');

const ALIAS = {
    'SRC': path.resolve(__dirname, 'src')
};

const MODE = 'development';

const script = {
    mode: MODE,
    target: 'electron-renderer',
    entry: path.join(__dirname, 'src', 'entry.tsx'),
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'res')
    },
    module: {
        rules: [{
            test: /.(ts||tsx)$/,
            exclude: /node_modules/,
            use: 'ts-loader',
            include: path.resolve(__dirname, 'src')
        }]
    },
    resolve: {
        extensions: [ '.ts', '.tsx' ],
        alias: ALIAS
    }
}

module.exports = [
   script
]