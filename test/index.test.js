import test from 'ava'
import xss from '../src/index'

test('middleware()', (t) => {
  let req = {
    body: { hi: '<hello>' },
    query: { hi: '<hello>' },
    params: { hi: '<hello>' },
  }

  xss()(req, {}, () => {
    t.deepEqual(req, {
      body: { hi: '&lt;hello>' },
      query: { hi: '&lt;hello>' },
      params: { hi: '&lt;hello>' },
    })
  })
})
