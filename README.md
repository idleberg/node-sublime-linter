# sublime-linter

[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)
[![GitHub](https://flat.bcodeadgen.net/github/release/idleberg/node-sublime-linter)](https://github.com/idleberg/node-sublime-linter/releases)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-sublime-linter)](https://circleci.com/gh/idleberg/node-sublime-linter)
[![David](https://flat.badgen.net/david/dev/idleberg/node-sublime-linter)](https://david-dm.org/idleberg/node-sublime-linter)

Linter for Sublime Text packages, supporting completions, snippets, build tools, syntax definitions and many more.

## Installation

Install `sublime-linter` dependency for your Sublime Text package

```sh
yarn add sublime-linter --dev || npm install sublime-linter -D
```

Alternatively, you can install `sublime-linter` globally for use as a CLI tool

```sh
yarn global add sublime-linter || npm install -g sublime-linter
```

## Usage

Create a package manifest for your Sublime Text package and mark it as private

**Example:**

```json
{
  "name": "my-sublime-package",
  "version": "0.0.0",
  "private": true,
  "license": "MIT",
  "author": "your-name",
  "devDependencies": {
    "sublime-linter": "^0.4.0"
  },
  "scripts": {
    "test": "sublime-linter"
  }
}
```

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-sublime-linter) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
