

/* Render-process application start module */

import { AppCore } from "@tremho/jove-common/typings"

        
export function appStart(appContext:AppCore) {
    console.log("jove-test app has started")
    
    // add your startup code here
    appContext.model.addSection('greeting', {
        hello: "Hello World"
    })
    appContext.setPageData('main', 'foobar', 'Das Fubar')
}        
