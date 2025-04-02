# Bikram Sambat

Utility library to convert date in AD (Gregorian) to Nepali date format BS (Bikram sambat)

[![Version](https://img.shields.io/npm/v/bikram-sambat-js?logo=npm)](https://www.npmjs.com/package/nepali-bikram-sambat)

## Installation

Using NPM:
```
npm i nepali-bikram-sambat
```

or, using Yarn:

```
yarn add nepali-bikram-sambat
```

## Usage

### Import package
Using ES6 `import`:
```
import BikramSambat, { ADToBS} from "nepali-bikram-sambat"
```

or, using commonJS `require`

```
const BS = require('nepali-bikram-sambat')

BS.ADToBS("2019-08-25")
```

#### 2. AD to BS conversion
Syntax: `BikramSambat(date: Date | string): string`

```
ADToBS("2019-08-25") // "2076-05-08"
ADToBS("2025-04-01") // "2081-12-19"
```

or,

```
new BikramSambat('2019-08-25')._getToBsDate()
```