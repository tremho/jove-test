
import {displayTree} from "./visualizer";

(()=>{
    const {runRemoteTest, startTest, endTest, callRemote, testRemote} = require ("@tremho/jove-test");

    async function pagecomp(t:any) {
        await startTest(t)

        const time = await callRemote('time')
        const ourTime = Date.now()
        let r = time - ourTime
        let desc = (time < 0) ? 'Remote clock is behind by ' : 'Remote clock is ahead by '
        desc += r/1000 + ' seconds'
        t.ok(true, desc)

        await testRemote(t, 'wait 1000', 'wait a second before inspecting page')

        const comptree = await callRemote('tree')
        const show = displayTree(comptree)
        console.log('component tree\nis here:', show)
        t.ok(!!comptree, show)

        await testRemote(t, 'appiumDirective hello', 'check appium')
        await testRemote(t, 'screenshot', 'give it a shot')

        await endTest(t)
    }
    runRemoteTest('Component Spy', pagecomp)

})()