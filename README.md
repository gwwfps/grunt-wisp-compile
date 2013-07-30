# grunt-wisp-compile

> Grunt plugin for compiling wisp files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wisp-compile --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wisp-compile');
```

## The "wisp" task

### Overview
In your project's Gruntfile, add a section named `wisp` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  wisp: {
    your_target: {
      // Target-specific file lists go here.
    },
  },
})
```


### Usage Examples

```js
grunt.initConfig({
  wisp: {
    noOptions: {
      files: {
        'hello.js': ['hello.wisp']
      }
    }
  },
})
```

## Release History
- 1.0 - Initial release.
