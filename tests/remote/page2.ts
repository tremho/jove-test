
import {
    runRemoteTest,
    startTest,
    testRemote,
    callRemote,
    screenshot,
    endTest
} from '@tremho/jove-test'
import * as JT from "@tremho/jove-test";

export async function page2(t: any) {

    await testRemote(t, 'readModelValue greeting.hello', 'verify change at model', 'Howdy')
    await testRemote(t, 'wait 1000', 'wait 1 second to view changed values')
    await screenshot('changePic')

    await testRemote(t, 'triggerAction nextbtn', 'press next button', true)
    await testRemote(t, 'wait 1000', 'wait 1 second to view next page','error')
    await screenshot('nextPic')

}
