
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

    await testRemote(t, 'assignComponent rptfor repeat-for-each', 'identify rptfor', true)
    const rfv = await callRemote(' tree rptfor')
    console.log('repeat-for tree', rfv)


}
