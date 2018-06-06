#!/usr/bin/env node

const meta = require('./package.json');

// Dependencies
const debug = require('gulp-debug');
const gulp = require('gulp');
const jsonLint = require('gulp-json-lint');
const program = require('commander');
const xmlValidator = require('gulp-xml-validator');
const yamlValidator = require('gulp-yaml-validate');
const { argv } = require('process');
const { join } = require('path');

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

const jsonReporter = function (lint, file) {
    throw `${file.path}: ${lint.error}`;
};

program
    .version(meta.version)
    .description('Lints common file-types used in Sublime Text packages')
    .arguments('[directory]')
    .usage('[directory]')
    .parse(argv);

const directories = (typeof program.args !== 'undefined' && program.args.length > 0) ? program.args : ['.'];

directories.forEach( directory => {
    let json = src.json.map(item => join(directory, item));
    let xml = src.xml.map(item => join(directory, item));
    let yaml = src.yaml.map(item => join(directory, item));

    // Lint JSON
    gulp.src(json, options)
        .pipe(debug({title: 'Lint JSON:'}))
        .pipe(jsonLint({
            comments: true
        }))
        .pipe(jsonLint.report(jsonReporter));

    // Validate XML
    gulp.src(xml, options)
        .pipe(debug({title: 'Lint XML:'}))
        .pipe(xmlValidator());

    // Validate YAML
    gulp.src(yaml, options)
        .pipe(debug({title: 'Lint YAML:'}))
        .pipe(yamlValidator({ safe: true }));
});
