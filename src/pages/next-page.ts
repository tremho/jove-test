import { AppCore, EventData } from "@tremho/jove-common"


export function pageStart(app:AppCore) {
    app.model.setAtPath('greeting.next', 'Welcome to the next page!', true)
}

export function testCond(item:any) {
    console.log('item', item)
    return item.label.length > 3
}