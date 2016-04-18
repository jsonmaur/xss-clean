import test from 'ava'
import { clean } from '../src/xss'

test('clean()', (t) => {
  t.is(clean('<hello>'), '&lt;hello>')
  t.deepEqual(clean({ hi: '<hello>' }), { hi: '&lt;hello>' })
  t.deepEqual(clean(['<hello>']), ['&lt;hello>'])
  t.is(clean(), '')
})
