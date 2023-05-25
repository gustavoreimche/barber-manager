module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'spec/**/*.spec.js' // Caminho para os seus arquivos de teste
    ],
    browsers: ['Chrome'],
    singleRun: true
  });
};
