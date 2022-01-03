
import {
    testRemote,
    screenshot,
    compare,
    remoteTitle,
    callRemote
} from '@tremho/jove-test'

export async function repeatCheck(t: any) {

    await remoteTitle(t, 'repeat check')

    await callRemote('goToPage next-page')

    // const tv = await callRemote('tree')
    // console.log('tree-view', tv)

    await testRemote(t, 'assignComponent rptfor repeat-for-each', 'identify rptfor', true)
    const rfv:any = await callRemote('tree rptfor')
    // console.log('--------------------------------------------')
    // console.log('repeat-for tree', rfv)
    // console.log('--------------------------------------------')

    await screenshot(t,'nextPic')
    // await compare(t, 'nextPic')

    try {
        let planets = rfv.content.children[0].children
        // let planets:any = [{textDisp:"Mercury"}, {textDisp:"Venus"}, {textDisp:"Earth"}, {textDisp:"Mars"},{textDisp:"Jupiter"}, {textDisp:"Saturn"}, {textDisp:"Uranus"}, {textDisp:"Neptune"}]
        t.ok(planets.length === 8, 'There are 8 planets displayed')
        t.ok(planets[0].textDisp === 'Mercury', 'Displays Mercury')
        t.ok(planets[1].textDisp === 'Venus', 'Displays Venus')
        t.ok(planets[2].textDisp === 'Earth', 'Displays Earth')
        t.ok(planets[3].textDisp === 'Mars', 'Displays Mars')
        t.ok(planets[4].textDisp === 'Jupiter', 'Displays Jupiter')
        t.ok(planets[5].textDisp === 'Saturn', 'Displays Saturn')
        t.ok(planets[6].textDisp === 'Uranus', 'Displays Uranus')
        t.ok(planets[7].textDisp === 'Neptune', 'Displays Neptune')
    } catch(e:any) {
        t.ok(false, e.message)
    }

    await compare(t, 'main')
    await compare(t, 'changePic')
    await compare(t, 'nextPic')

    // await testRemote(t, 'goToPage main-page', 'return to main', true)

}
