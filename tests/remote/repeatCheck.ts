
import {
    testRemote,
    screenshot,
    remoteTitle,
    callRemote
} from '@tremho/jove-test'

export async function repeatCheck(t: any) {

    await remoteTitle(t, 'repeat check')

    await callRemote('goToPage next-page')

    // const tv = await callRemote('tree')
    // console.log('tree-view', tv)

    await testRemote(t, 'assignComponent rptfor repeat-for-each', 'identify rptfor', true)
    const rfv = await testRemote(t, 'tree rptfor', 'get named tree')
    console.log('--------------------------------------------')
    console.log('repeat-for tree', rfv)
    console.log('--------------------------------------------')

    await testRemote(t, 'goToPage main-page', 'return to main', true)

}
