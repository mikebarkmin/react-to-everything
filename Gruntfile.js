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
        keepAlive: true,
      },
    },

    connect: {
      options: {
        port: 8000,
      },

      dist: {
        options: {
          keepalive: true,
          middleware() {
            return [
              mountFolder(pkgConfig.dist),
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

    karma: {
      unit: {
        configFile: 'karma.conf.js',
      },
    },

    copy: {
      dist: {
        files: [
          {
            flatten: true,
            src: ['<%= pkg.src %>/index.web.html'],
            dest: '<%= pkg.dist %>/index.html',
          },
          {
            flatten: true,
            src: ['<%= pkg.src %>/favicon.ico'],
            dest: '<%= pkg.dist %>/favicon.ico',
          },
        ],
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

    run: {
      'launch-electron': {
        cmd: 'electron electron.js',
      },
    },

    concurrent: {
      electron: {
        tasks: ['watch'],
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
      'webpack-dev-server',
    ]);
  });

  grunt.registerTask('serve-electron', () => {
    grunt.task.run([
      'concurrent:electron',
    ]);
  });

  grunt.registerTask('test', ['karma']);
  grunt.registerTask('build', ['clean', 'copy', 'webpack']);
  grunt.registerTask('default', []);
};
