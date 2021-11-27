

/* application code for main-page */

import { AppCore, EventData } from "@tremho/jove-common"

    
export function pageStart(app:AppCore) {
    console.log('main page started')
}

export function changeValues(ev:EventData) {
    const app = ev.app
    app.model.setAtPath('greeting.hello', 'Howdy', true)
    // app.setPageData('main', 'foobar', 'Foobarific!')
}

export function nextPage(ev:EventData) {
    const app = ev.app
    app.navigateToPage('next')
}