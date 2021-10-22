
const {runRemoteTest, startTest, endTest, callRemote, testRemote} = require("@tremho/jove-test");


async function pocTest(t:any) {
    await startTest(t)

    console.log('doing basic tests')
    await testRemote(t, 'add 2 3', 'addition test --- ', 5)
    await testRemote(t, 'subtract 102 60', 'subtraction test', 42)
    await testRemote(t, 'multiply 7 6', 'multiplication test', 42)
    await testRemote(t, 'divide 714 17', 'division test', 42)
    await testRemote(t, 'greet Steve', 'text return test', 'hello, Steve')
    await testRemote(t, 'fetch', 'async return test', 'Okay, here I am')
    let navInfo = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got '+typeof navInfo+') '+navInfo)
    t.ok(navInfo.pageId === 'main', 'Page is main (got '+navInfo.pageId+')')
    t.ok(navInfo.timestamp > 0 && navInfo.timestamp < Date.now(), 'Timestamp is valid (got '+navInfo.timestamp+')')
    let firstTimestamp = navInfo.timestamp

    await testRemote(t, 'assignComponent hiLabel simple-label', 'assign hiLabel', true)
    await testRemote(t, 'assignComponent changer simple-button action changeValues', 'assign changer', true)
    await testRemote(t, 'assignComponent nextbtn simple-button action nextPage', 'assign nextbtn', true)
    await testRemote(t, 'readComponentProperty changer text', 'verify component', 'Change Values')
    await testRemote(t, 'triggerAction changer', 'press button', true)

    await testRemote(t, 'readModelValue greeting.hello', 'verify change at model', 'Howdy')
//    await testRemote(t, 'readComponentProperty hiLabel text', 'verify change at hiLabel', 'Howdy')
    await testRemote(t, 'wait 1000', 'wait 1 second to view changed values')

    await testRemote(t, 'triggerAction nextbtn', 'press next button', true)
    await testRemote(t, 'wait 1000', 'wait 1 second to view changed page')

    navInfo = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got '+typeof navInfo+') '+navInfo)
    t.ok(navInfo.pageId === 'next', 'Page is next (got '+navInfo.pageId+')')
    t.ok(navInfo.timestamp > firstTimestamp && navInfo.timestamp < Date.now(), 'Timestamp is valid (got '+navInfo.timestamp+')')

    await endTest(t)
}
// Here is how we run a test
runRemoteTest('Proof of concept walk-thru', pocTest)

/*
Test script syntax ideas

const direct = {
    title: 'identify change button',
    cmd: 'assignComponent changer simple-button action changeValues',
    expect: true
}
const script = `
    Identify Change Button
        assignComponent(changer, simple-button, action, changeValues)
        expect true
`
 */
