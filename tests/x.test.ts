

import {pocTest} from "./remote/poctests";
import {page1} from "./remote/page1";
import {page2} from "./remote/page2"

import {runRemoteTest, endTest} from '@tremho/jove-test'

async function allTest(t: any) {
    await pocTest(t)
    await page1(t)
    await page2(t)
    await endTest(t)
}

// Here is how we run a test

runRemoteTest('All  Proof of concept walk-thru', allTest)