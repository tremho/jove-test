
import {runRemoteTest} from "@tremho/jove-test";
import {props, hello} from './aModule'

function test(t:any) {
    t.ok(props.foo === 'FOO', "FOO")
    t.ok(props.bar === 'BAR', "BAR")
    t.ok(props.baz === 'FUBAR', "BAZ")
    let s = hello('Tap')
    t.ok(s === 'Hello Tap', s)

    t.end()
}
runRemoteTest('a Test', test)
