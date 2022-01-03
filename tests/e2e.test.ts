

import {pocTest} from "./integration/poctests";
import {page1} from "./integration/page1";
import {page2} from "./integration/page2"
import {repeatCheck} from "./integration/repeatCheck"
import {actionBar} from "./integration/action-bar";

import {runRemoteTest, endTest} from '@tremho/jove-test'

async function allTest(t: any) {
    await pocTest(t)
    await page1(t)
    await page2(t)
    // await repeatCheck(t)
    await actionBar(t)
    await endTest(t)
}

// Here is how we run a test

runRemoteTest('All  Proof of concept walk-thru', allTest)