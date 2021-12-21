
import {
    testRemote,
    screenshot,
    remoteTitle
} from '@tremho/jove-test'

export async function page2(t: any) {

    await remoteTitle(t, 'page 2')

    await testRemote(t, 'readModelValue greeting.hello', 'verify change at model', 'Howdy')
    await testRemote(t, 'wait 1000', 'wait 1 second to view changed values')
    await screenshot('changePic')

    await testRemote(t, 'triggerAction nextbtn', 'press next button', true)
    await testRemote(t, 'wait 1000', 'wait 1 second to view next page')
    // await screenshot('nextPic')

}
