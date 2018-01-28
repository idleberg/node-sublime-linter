# sublime-linter

[![npm](https://img.shields.io/npm/l/sublime-linter.svg?style=flat-square)](https://www.npmjs.org/package/sublime-linter)
[![npm](https://img.shields.io/npm/v/sublime-linter.svg?style=flat-square)](https://www.npmjs.org/package/sublime-linter)
[![David](https://img.shields.io/david/idleberg/node-sublime-linter.svg?style=flat-square)](https://david-dm.org/idleberg/node-sublime-linter)

Linter for Sublime Text packages, supporting completions, snippets, build tools, syntax definitions and many more.

## Installation

Add `sublime-linter` to your devDependencies:

`$ npm install sublime-linter -D`

## Usage

Include a package manifest for your Sublime Text package

```json
{
  "name": "my-sublime-package",
  "version": "0.0.0",
  "license": "MIT",
  "author": "your-name",
  "private": true,
  "devDependencies": {
    "sublime-linter": "^0.1.0"
  },
  "scripts": {
    "test": "sublime-linter"
  }
}
```

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-sublime-linter) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
