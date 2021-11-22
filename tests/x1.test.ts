
// import Tap from 'tap'
//
// import {props, hello} from './aModule'

import * as JT from '@tremho/jove-test'

async function pocTest(t: any) {
    console.log('>>>>>>>>>>>>> poctest starting <<<<<<<<<<<<')

    await JT.startTest(t)

    console.log('doing basic tests')
    await JT.testRemote(t, 'add 2 3', 'addition test --- ', 5)
    await JT.testRemote(t, 'subtract 102 60', 'subtraction test', 42)
    await JT.testRemote(t, 'multiply 7 6', 'multiplication test', 42)
    await JT.testRemote(t, 'divide 714 17', 'division test', 42)
    await JT.testRemote(t, 'greet Steve', 'text return test', 'hello, Steve')

    await JT.testRemote(t, 'fetch', 'async return test', 'Okay, here I am')

    // await JT.screenshot('startPic')

    let navInfo:any = await JT.callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'main', 'Page is main (got ' + navInfo.pageId + ')')
    t.ok(navInfo.timestamp > 0 && navInfo.timestamp < Date.now(), 'Timestamp is valid (got ' + navInfo.timestamp + ')')
    let firstTimestamp = navInfo.timestamp

    await JT.testRemote(t, 'assignComponent hiLabel simple-label', 'assign hiLabel', true)
    await JT.testRemote(t, 'assignComponent changer simple-button action changeValues', 'assign changer', true)
    await JT.testRemote(t, 'assignComponent nextbtn simple-button action nextPage', 'assign nextbtn', true)
    await JT.testRemote(t, 'readComponentProperty changer text', 'verify component', 'Change Values')
    await JT.testRemote(t, 'triggerAction changer', 'press button', true)

    await JT.testRemote(t, 'readModelValue greeting.hello', 'verify change at model', 'Howdy')
//    await testRemote(t, 'readComponentProperty hiLabel text', 'verify change at hiLabel', 'Howdy')
    await JT.testRemote(t, 'wait 1000', 'wait 1 second to view changed values', undefined)
    // await JT.screenshot('changePic')

    await JT.testRemote(t, 'triggerAction nextbtn', 'press next button', true)
    await JT.testRemote(t, 'wait 1000', 'wait 1 second to view next page',undefined)
    // await JT.screenshot('nextPic')

    console.log('test script calling endTest')
    await JT.endTest(t)
}

// Here is how we run a test

JT.runRemoteTest('X1 Proof of concept walk-thru', pocTest)

JT.executeQueue()