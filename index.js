#!/usr/bin/env node

// Dependencies
const gulp = require('gulp');
const debug = require('gulp-debug');
const jsonLint = require('gulp-json-lint');
const yamlValidator = require('gulp-yaml-validate');
const xmlValidator = require('gulp-xml-validator');

// Gulp options
const options = {
  allowEmpty: true
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
    comments: true
  }))
  .pipe(jsonLint.report('verbose'));

// Validate XML
gulp.src(src.xml, options)
  .pipe(debug({title: 'Lint XML:'}))
  .pipe(xmlValidator());

// Validate YAML
gulp.src(src.yaml, options)
  .pipe(debug({title: 'Lint YAML:'}))
  .pipe(yamlValidator({ safe: true }));
