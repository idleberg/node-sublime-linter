#!/usr/bin/env node

// Dependencies
const gulp = require('gulp');
const debug = require('gulp-debug');
const jsonLint = require('gulp-jsonlint');
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
    '!node_modules/**/*'
  ],
  yaml: [
    '**/*.sublime-syntax',
    '**/*.YAML-tmLanguage',
    '**/*.YAML-tmTheme',
    '!node_modules/**/*'
  ]
};

// Lint JSON
gulp.src(src.json, options)
  .pipe(debug({title: 'Lint JSON:'}))
  .pipe(jsonLint())
  .pipe(jsonLint.failAfterError())
  .pipe(jsonLint.reporter());

// Validate XML
gulp.src(src.xml, options)
  .pipe(debug({title: 'Lint XML:'}))
  .pipe(xmlValidator());

// Validate YAML
gulp.src(src.yaml, options)
  .pipe(debug({title: 'Lint YAML:'}))
  .pipe(yamlValidator({ safe: true }));
