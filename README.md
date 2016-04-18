# Node.js XSS-Clean
[![Build Status](https://travis-ci.org/jsonmaur/xss-clean.svg?branch=master)](https://travis-ci.org/jsonmaur/xss-clean)
[![Coverage Status](https://coveralls.io/repos/github/jsonmaur/xss-clean/badge.svg?branch=master)](https://coveralls.io/github/jsonmaur/xss-clean?branch=master)

Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params. Works with [Express](http://expressjs.com/), [Restify](http://restify.com/), or any other [Connect](https://github.com/senchalabs/connect) app.

- [How to Use](#use)
- [License](#license)

<a name="use"></a>
## How to Use
```bash
npm install xss-clean --save
```

```javascript
var restify = require('restify')
var xss = require('xss-clean')

var app = restify.createServer()

app.use(restify.bodyParser())

/* make sure this comes before any routes */
app.use(xss())

app.listen(8080)
```

This will sanitize any data in `req.body`, `req.query`, and `req.params`. You can also access the API directly if you don't want to use as middleware.

```javascript
var clean = require('xss-clean/lib/xss').clean

var cleaned = clean('<script></script>')
// will return "&lt;script>&lt;/script>"
```

<a name="license"></a>
## License

[MIT](LICENSE) © [Jason Maurer](http://maur.co)
