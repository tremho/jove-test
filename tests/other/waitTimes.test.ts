
(()=> {
    const {runRemoteTest, startTest, endTest, callRemote, testRemote} = require ("@tremho/jove-test");

    async function waitTest(t:any) {
        console.log('starting wait test')

        await startTest(t)

        console.log('testing nominal response')
        let start = Date.now()
        await testRemote(t, 'add 2 3', 'addition test --- ', 5)
        let end = Date.now()
        let r = -(start-end)
        let x = r >= -500 && r <= 500
        t.ok(x, `difference is ${r}`)
        console.log("nominal response is", r, x)


        console.log("testing 1 second")
        start = Date.now()
        await testRemote(t, 'wait 1000', 'Wait 1 second')
        end = Date.now()
        r = -(start+1000-end)
        x = r >= -500 && r <= 500
        t.ok(x, `difference is ${r}`)
        console.log("difference", r, x)

        console.log("testing 5 seconds")
        start = Date.now()
        await testRemote(t, 'wait 5000', 'Wait 5 seconds')
        end = Date.now()
        r = -(start+5000-end)
        x = r >= -500 && r <= 500
        t.ok(x, `difference is ${r}`)
        console.log("difference", r, x)

        console.log("testing 100 ms")
        start = Date.now()
        await testRemote(t, 'wait 100', 'Wait 100 ms')
        end = Date.now()
        r = -(start+100-end)
        x = r >= -50 && r <= 50
        t.ok(x, `difference is ${r}`)
        console.log("difference", r, x)

        console.log('ending')
        await endTest(t)
    }

    console.log('running remote Jove Test')
    runRemoteTest('Test Wait Times', waitTest)

})()

