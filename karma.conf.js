const fs = require('fs');
const injectPreprocessor = () => {
  return (content, file, done) => {
    done(content.replace(/\{\{(.+)}}/g, (_, filename) => {
      const f = file.path.substr(0, file.path.lastIndexOf('/') + 1) + filename;

      if (fs.existsSync(f)) {
        return fs
          .readFileSync(f)
          .toString('utf8')
          .replace(/\n/g, '');
      }

      return content;
    }));
  }          
}

injectPreprocessor.$inject = [];

const nonePreprocessor = () => {
  return (content, file, done) => {
    done(';');
  }          
}

nonePreprocessor.$inject = [];

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'spec/**/*spec.js',
      'src/**/*.html',
      'src/**/*.js',
    ],

    exclude: [],

    preprocessors: {
      'spec/**/*spec.js': ['babel'],
      'src/**/*.html': ['html2js'],
      'src/**/*.js': ['babel'],
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_DEBUG,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    plugins: [
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-commonjs',
      'karma-html2js-preprocessor',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      {
        'preprocessor:inject': ['factory', injectPreprocessor],
      },
      {
        'preprocessor:none': ['factory', nonePreprocessor],
      },

    ],

    babelPreprocessor: {
      options: {
          presets: ['@babel/preset-env'],
          sourceMap: 'inline'
      },   
      filename: (file) => {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: (file) => {
        return file.originalPath;
      }
    },
    
  })
}
