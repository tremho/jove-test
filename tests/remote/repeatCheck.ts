
import {
    testRemote,
    screenshot,
    remoteTitle,
    callRemote
} from '@tremho/jove-test'

export async function repeatCheck(t: any) {

    await remoteTitle(t, 'repeat check')

    await callRemote('goToPage next-page')

    const tv = await callRemote('tree')
    console.log('tree-view', tv)

}
