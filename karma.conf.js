module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/app/**/*.spec.ts' // Caminho para os seus arquivos de teste
    ],
    preprocessors: {
      'src/app/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      // Configurações do webpack, se necessário
    },
    browsers: ['Chrome'],
    singleRun: true
  });
};
