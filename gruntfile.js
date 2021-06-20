let grunt = require("grunt");
//let deploymentEnv = grunt.option('env');

grunt.initConfig({
  clean: ['./bin', "./tscommand*.**"],
  ts: {
    options: {
      compile: true,
      target: 'es2016',
      module: 'commonjs',
      rootDir: "./src",
      comments: true,
      failOnTypeErrors: true,
      noImplicitAny: false,
      noImplicitReturns: false,
      pretty: true,
      strict: false,
      strictNullChecks: false,
      strictPropertyInitilization: false,
      verbose: true,
      sourceMap: true,
      declaration: false,
      esModuleInterop: true
    },
    azure: {
      src: ["./src/**/*.ts", ["./src/views"]],
      outDir: "bin",
      options: {
        esModuleInterop: true
      }
    },
    dev:
    {
      src: ["./src/**/*.ts", "./src/views"],
      outDir: "bin",
      watch: "./src",
      options: {
        fast: "watch"
      }
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks("grunt-ts");

grunt.registerTask('default', ["clean", `ts`]);