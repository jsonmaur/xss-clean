var test = require('tape')
var xss = require('../lib')
var clean = require('../lib/xss').clean

test('middleware()', function(t) {
  t.plan(1)

  var req = {
    body: { hi: '<hello>' },
    query: { hi: '<hello>' },
    params: { hi: '<hello>' },
  }
  xss()(req, {}, function() {
    t.deepEqual(req, {
      body: { hi: '&lt;hello>' },
      query: { hi: '&lt;hello>' },
      params: { hi: '&lt;hello>' },
    }, 'cleans app data')
  })
})

test('clean()', function(t) {
  t.plan(5)

  t.equal(
    clean('<hello>'),
    '&lt;hello>',
    'cleans a string'
  )

  t.deepEqual(
    clean({hi: '<hello>'}),
    {hi: '&lt;hello>'},
    'cleans an object'
  )

  t.deepEqual(
    clean({hi: '<hello>', hey: '<whatup>', test: 'testing'}),
    {hi: '&lt;hello>', hey: '&lt;whatup>', test: 'testing'},
    'cleans an object with multiple keys'
  )

  t.deepEqual(
    clean(['<hello>']),
    ['&lt;hello>'],
    'cleans an array'
  )

  t.equal(
    clean(),
    '',
    'runs with no input'
  )
})
