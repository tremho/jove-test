
import {
    testRemote,
    callRemote,
    screenshot,
    compare
} from '@tremho/jove-test'

export async function page1(t: any) {
    let navInfo:any = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'main', 'Page is main (got ' + navInfo.pageId + ')')
    // t.ok(navInfo.timestamp > 0 && navInfo.timestamp < Date.now(), 'Timestamp is valid (got ' + navInfo.timestamp + ')')
    // let firstTimestamp = navInfo.timestamp

    await screenshot('main')
    let compResp = await compare(t, 'main')
    console.log('compare response', compResp)

    await testRemote(t, 'assignComponent hiLabel simple-label', 'assign hiLabel', true)
    await testRemote(t, 'assignComponent changer simple-button action changeValues', 'assign changer', true)
    await testRemote(t, 'assignComponent nextbtn simple-button action nextPage', 'assign nextbtn', true)
    await testRemote(t, 'readComponentProperty changer text', 'verify component', 'Change Values')
    await testRemote(t, 'triggerAction changer', 'press button', true)


}
