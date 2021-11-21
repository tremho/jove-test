
import Tap from 'tap'

import {props, hello} from './aModule'

Tap.test('b Test', t => {
    t.ok(props.foo === 'FOO', "FOO")
    t.ok(props.bar === 'BAR', "BAR")
    t.ok(props.baz === 'FUBAR', "BAZ")
    let s = hello('Tap')
    t.ok(s === 'Hello Tap', s)

    t.end()
})

