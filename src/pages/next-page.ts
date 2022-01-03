import { AppCore, EventData } from "@tremho/jove-common"


export function pageStart(app:AppCore) {
    app.model.setAtPath('greeting.next', 'Welcome to the next page!', true)
}
