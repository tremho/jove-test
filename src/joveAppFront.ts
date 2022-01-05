

/* Render-process application start module */

import { AppCore } from "@tremho/jove-common"
import {loadPlanets} from "./DataLoad";

        
export async function appStart(appContext:AppCore) {
    console.log("jove-test app has started")
    
    // add your startup code here
    appContext.model.addSection('greeting', {
        hello: "Hello World"
    })

    await appContext.setupMenu('menuDef.txt')

    // add your startup code here
    await loadPlanets(appContext)
    appContext.model.setAtPath('planet.filter', [], true)

    appContext.model.addSection('test', {
        nested: [
            {label:"foo", value: "bar"},
            {label:"ren", value: "stimpy"},
            {label:"itchy", value: "scratchy"},
            {label:"tom", value: "jerry"}
        ]
    })

    return appContext.setupMenu('menuDef.txt')
}
