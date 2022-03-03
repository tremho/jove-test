

/* application code for main-page */

import { AppCore, EventData } from "@tremho/jove-common"

    
export function pageEnter(app:AppCore) {
    console.log('main page started')
}

export function changeValues(ev:EventData) {
    const app = ev.app
    if(ev.eventName === 'press') {
        app.model.setAtPath('greeting.hello', 'Howdy', true)
        // app.setPageData('main', 'foobar', 'Foobarific!')
    }
}

export function nextPage(ev:EventData) {
    const app = ev.app
    if(ev.eventName === 'press') {
        app.navigateToPage('next')
    }
}