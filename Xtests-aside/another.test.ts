const {runRemoteTest, startTest, endTest, callRemote, testRemote, screenshot} = require("@tremho/jove-test");

async function pocTest(t: any) {
    console.log('>>>>>>>>>>>>> poctest starting <<<<<<<<<<<<')

    await startTest(t)

    console.log('doing basic tests')
    await testRemote(t, 'add 2 3', 'addition test --- ', 5)
    await testRemote(t, 'subtract 102 60', 'subtraction test', 42)
    await testRemote(t, 'multiply 7 6', 'multiplication test', 42)
    await testRemote(t, 'divide 714 17', 'division test', 42)
    await testRemote(t, 'greet Steve', 'text return test', 'hello, Steve')

    await testRemote(t, 'fetch', 'async return test', 'Okay, here I am')

    await screenshot('startPic')

    let navInfo = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'main', 'Page is main (got ' + navInfo.pageId + ')')
    t.ok(navInfo.timestamp > 0 && navInfo.timestamp < Date.now(), 'Timestamp is valid (got ' + navInfo.timestamp + ')')
    let firstTimestamp = navInfo.timestamp

    await testRemote(t, 'assignComponent hiLabel simple-label', 'assign hiLabel', true)
    await testRemote(t, 'assignComponent changer simple-button action changeValues', 'assign changer', true)
    await testRemote(t, 'assignComponent nextbtn simple-button action nextPage', 'assign nextbtn', true)
    await testRemote(t, 'readComponentProperty changer text', 'verify component', 'Change Values')
    await testRemote(t, 'triggerAction changer', 'press button', true)

    await testRemote(t, 'readModelValue greeting.hello', 'verify change at model', 'Howdy')
//    await testRemote(t, 'readComponentProperty hiLabel text', 'verify change at hiLabel', 'Howdy')
    await testRemote(t, 'wait 1000', 'wait 1 second to view changed values')
    await screenshot('changePic')

    await testRemote(t, 'triggerAction nextbtn', 'press next button', true)
    await testRemote(t, 'wait 1000', 'wait 1 second to view next page')
    await screenshot('nextPic')

    await endTest(t)
    // t.ok(true, 'Life is good')
    // t.end()
}

// Here is how we run a test

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$ Run Remote Test ---->>>  ")
runRemoteTest('Another Proof of concept walk-thru', pocTest)