const serveStatic = require('serve-static');

const mountFolder = (dir) => serveStatic(require('path').resolve(dir));

const webpackDistConfig = require('./webpack.dist.config.js');
const webpackDevConfig = require('./webpack.dev.config.js');

module.exports = (grunt) => {
  // Let *load-grunt-tasks* require everything
  require('load-grunt-tasks')(grunt);

  // Read configuration from package.json
  const pkgConfig = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkgConfig,

    webpack: {
      options: webpackDistConfig,
      dist: {
        cache: false,
      },
    },

    'webpack-dev-server': {
      options: {
        hot: true,
        port: 8000,
        webpack: webpackDevConfig,
        publicPath: '/assets/',
        contentBase: './<%= pkg.src %>/',
      },
      start: {
      },
    },

    connect: {
      options: {
        port: 8000,
      },

      dist: {
        options: {
          middleware() {
            return [
              mountFolder(pkgConfig.dist + '/web'),
            ];
          },
        },
      },
    },

    open: {
      options: {
        delay: 500,
      },
      dev: {
        path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/index.web.html',
        app: 'xdg-open',
      },
      dist: {
        path: 'http://localhost:<%= connect.options.port %>/index.html',
        app: 'xdg-open',
      },
    },

    copy: {
      dist: {
        files: [
          {
            flatten: true,
            src: ['<%= pkg.src %>/index.web.html'],
            dest: '<%= pkg.dist %>/web/index.html',
          },
          {
            flatten: true,
            src: ['<%= pkg.src %>/favicon.ico'],
            dest: '<%= pkg.dist %>/web/favicon.ico',
          },
        ],
      },
      electron: {
        files: [
          {
            flattern: true,
            src: ['<%= pkg.src %>/index.desktop.html'],
            dest: '<%= pkg.dist %>/electron/index.html',
          },
          {
            flattern: true,
            src: ['<%= pkg.src %>/electron.js'],
            dest: '<%= pkg.dist %>/electron/index.js',
          },
          {
            flattern: true,
            src: ['<%= pkg.dist %>/web/assets/main.js'],
            dest: '<%= pkg.dist %>/electron/assets/main.js',
          },
        ],
      },
      electronDist: {
        files: [{
          flattern: true,
          src: ['<%= pkg.src %>/package.json'],
          dest: '<%= pkg.dist %>/electron/package.json',
        }],
      },
    },

    clean: {
      dist: {
        options: {
          force: true,
        },
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>',
          ],
        }],
      },
      electronDist: {
        options: {
          force: true,
        },
        files: [{
          dot: true,
          src: '<%= pkg.dist %>/electron/package.json',
        }],
      },
    },

    watch: {
      options: {
        livereload: true,
      },
      build: {
        files: 'src/**/*.js',
        tasks: ['webpack'],
      },
    },

    exec: {
      'launch-electron': 'electron dist/electron/index.js',
    },

    concurrent: {
      electron: {
        tasks: ['watch', 'exec:launch-electron'],
        options: {
          logConcurrentOutput: true,
        },
      },
    },
  });

  grunt.registerTask('serve-web', (target) => {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open:dist', 'connect:dist']);
    }

    return grunt.task.run([
      'open:dev',
      'webpack-dev-server:start',
    ]);
  });

  grunt.registerTask('serve-electron', () => {
    return grunt.task.run([
      'build',
      'concurrent:electron',
    ]);
  });

  grunt.registerTask('test', ['karma']);
  grunt.registerTask('build', ['clean', 'webpack', 'copy']);
  grunt.registerTask('default', []);
};
