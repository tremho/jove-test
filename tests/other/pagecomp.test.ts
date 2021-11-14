
(()=>{
    const {runRemoteTest, startTest, endTest, callRemote, testRemote} = require ("@tremho/jove-test");

    async function pagecomp(t:any) {
        await startTest(t)

        const time = await callRemote('time')
        const ourTime = Date.now()
        let r = time - ourTime
        let desc = (time < 0) ? 'Remote is behind by ' : 'Remote is ahead by '
        desc += r/1000 + ' seconds'
        t.ok(true, desc)

        const comptree = await callRemote('tree')
        console.log('component tree', comptree)
        t.ok(!!comptree, 'component tree is returned')

        await endTest(t)
    }
    runRemoteTest('Component Spy', pagecomp)

})()