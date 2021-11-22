
import Tap from 'tap'
import {props, hello} from './aModule'

function test(t:any) {
    t.ok(props.foo === 'FOO', "FOO")
    t.ok(props.bar === 'BAR', "BAR")
    t.ok(props.baz === 'FUBAR', "BAZ")
    let s = hello('Tap')
    t.ok(s === 'Hello Tap', s)

    t.end()
}
Tap.test('a test', (t:any)=> {
    test(t)
})
