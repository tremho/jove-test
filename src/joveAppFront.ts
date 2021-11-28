

/* Render-process application start module */

import { AppCore } from "@tremho/jove-common"

        
export function appStart(appContext:AppCore) {
    console.log("jove-test app has started")
    
    // add your startup code here
    appContext.model.addSection('greeting', {
        hello: "Hello World"
    })

    appContext.setPageData('main', 'planet', [
            {name:'Mercury', diameter: 4879, distance: 57.9, orbit: 88, moons: 0 },
            {name:'Venus' , diameter: 12104, distance: 108.2, orbit: 224.7, moons: 0},
            {name:'Earth', diameter: 12756, distance: 149.6, orbit: 365.2, moons: 1},
            {name:'Mars', diameter: 6792, distance: 227.9, orbit: 687.0, moons: 2},
            {name:'Jupiter', diameter: 142984, distance: 778.6, orbit: 4331, moons:79},
            {name:'Saturn', diameter: 120536, distance: 1433.5, orbit: 10747, moons: 82},
            {name:'Uranus', diameter: 51118, distance: 2872.5, orbit: 30589, moons: 27},
            {name:'Neptune', diameter: 49528, distance: 4495.1, orbit: 59800, moons: 14}
        ])

    // appContext.setPageData('main', {
    //     mercury: 57.9,
    //     venus: 108.2,
    //     earth: 149.6,
    //     mars: 227.9,
    //     jupiter: 778.6,
    //     saturn: 1433.5,
    //     uranus: 2872.5,
    //     neptune: 4495.1
    // })

}
