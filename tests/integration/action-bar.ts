
import {
    testRemote,
    callRemote,
    screenshot,
    compare,
    askAHuman,
    wait,
    remoteTitle
} from '@tremho/jove-test'

export async function actionBar(t: any) {
    await remoteTitle(t, 'Action-Bar')

    // title
    await testRemote(t, 'goToPage action-bar-test', 'go to action-bar-test page')
    let navInfo:any = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'action-bar-test', 'Page is correct (got ' + navInfo.pageId + ')')

    await wait(10000)
    await askAHuman(t, 'Is the title showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is the system menu working?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is there an icon for check item #3?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is there an tooltip for check item #3?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Are toolbar, indicator, or menu showing?', 'Yes,No', 'No')
    //
    // // menu 2
    await testRemote(t, 'goToPage action-bar-test-2', 'go to action-bar-test 2 page')
    navInfo = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'action-bar-test-2', 'Page is correct (got ' + navInfo.pageId + ')')

    await wait(10000)
    await askAHuman(t, 'Is the title showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is the app-menu showing and working?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Are toolbar or indicator showing?', 'Yes,No', 'No')

    // toolbar 3
    await wait(10000)
    await testRemote(t, 'goToPage action-bar-test-3', 'go to action-bar-test 3 page')
    navInfo = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'action-bar-test-3', 'Page is correct (got ' + navInfo.pageId + ')')

    await askAHuman(t, 'Is the title showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is the app-menu showing and working?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is toolbar showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is it the main toolbar?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is indicator showing?', 'Yes,No', 'No')

    // indicator 4
    await wait(10000)
    await testRemote(t, 'goToPage action-bar-test-4', 'go to action-bar-test 4 page')
    navInfo = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'action-bar-test-4', 'Page is correct (got ' + navInfo.pageId + ')')

    await askAHuman(t, 'Is the title showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is the app-menu showing and working?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is indicator showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is toolbar showing?', 'Yes,No', 'No')

    // other toolbar 5
    await wait(5000)
    await testRemote(t, 'goToPage action-bar-test-5', 'go to action-bar-test 5 page')
    navInfo = await callRemote('readModelValue page.navInfo')
    t.ok(typeof navInfo === 'object', 'navInfo is an object (got ' + typeof navInfo + ') ' + navInfo)
    t.ok(navInfo.pageId === 'action-bar-test-5', 'Page is correct (got ' + navInfo.pageId + ')')

    await askAHuman(t, 'Is the title showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is the app-menu showing and working?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is indicator showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is toolbar showing?', 'Yes,No', 'Yes')
    await askAHuman(t, 'Is it the "other" toolbar?', 'Yes, No', 'Yes')


}
