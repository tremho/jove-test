
import {
    testRemote,
    callRemote,
    screenshot,
    compare,
    askAHuman,
    remoteTitle
} from '@tremho/jove-test'

export async function actionBar(t: any) {
    await remoteTitle(t, 'Action-Bar')
    await testRemote(t, 'goToPage action-bar-test', 'go to action-bar-test page')
    let navInfo:any = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'action-bar-test', 'Page is correct (got ' + navInfo.pageId + ')')

    await askAHuman(t, '')


}
