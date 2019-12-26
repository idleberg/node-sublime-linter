#!/usr/bin/env node

const meta = require('./package.json');

// Dependencies
const debug = require('gulp-debug');
const gulp = require('gulp');
const jsonLint = require('@prantlf/gulp-jsonlint');
const process = require('process');
const program = require('commander');
const xmlValidator = require('gulp-xml-validator');
const yamlValidator = require('gulp-yaml-validate');

program
  .version(meta.version)
  .description('Lints common file-types used in Sublime Text packages')
  .arguments('[directory]')
  .usage('[directory]')
  .parse(process.argv);

// Gulp options
const options = {
  allowEmpty: true,
  cwd: program.args && program.args.length ? program.args[0] : process.cwd()
};

const src = {
  json: [
    '**/*.JSON-sublime-syntax',
    '**/*.JSON-tmLanguage',
    '**/*.JSON-tmTheme',
    '**/*.sublime-build',
    '**/*.sublime-commands',
    '**/*.sublime-completions',
    '**/*.sublime-keymap',
    '**/*.sublime-macro',
    '**/*.sublime-menu',
    '**/*.sublime-settings',
    '**/*.sublime-theme',
    'messages.json',
    '!bower_components/**/*',
    '!node_modules/**/*'
  ],
  xml: [
    '**/*.plist',
    '**/*.PLIST-sublime-syntax',
    '**/*.PLIST-tmLanguage',
    '**/*.PLIST-tmTheme',
    '**/*.sublime-snippet',
    '**/*.tmCommand',
    '**/*.tmLanguage',
    '**/*.tmPreferences',
    '**/*.tmSnippet',
    '**/*.tmTheme',
    '**/*.xml',
    '!bower_components/**/*',
    '!node_modules/**/*'
  ],
  yaml: [
    '**/*.sublime-syntax',
    '**/*.YAML-tmLanguage',
    '**/*.YAML-tmTheme',
    '!bower_components/**/*',
    '!node_modules/**/*'
  ]
};

// Lint JSON
gulp.src(src.json, options)
  .pipe(debug({title: 'Lint JSON:'}))
  .pipe(jsonLint({
    ignoreComments: true,
  }))
  .pipe(jsonLint.failOnError());

// Validate XML
gulp.src(src.xml, options)
  .pipe(debug({title: 'Lint XML:'}))
  .pipe(xmlValidator());

// Validate YAML
gulp.src(src.yaml, options)
  .pipe(debug({title: 'Lint YAML:'}))
  .pipe(yamlValidator({ safe: true }));
