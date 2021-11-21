
export function extractTitleBar(tree:any) {
    console.log('extractTitleBar')
    let out = ''
    const page = tree.content
    let valid = true
    if (valid) valid = page.tagName === 'TBPage' || page.tagName === 'MAIN-PAGE'
    if (valid) {
        let tools=0, indicators=0, title='', menu=0, back=false
        for (let ch of page.children) {
            if (ch.className === 'tool-bar-container') {
                console.log(`tool-bar-container has ${ch.children.length} children`)
                for (let tbc of ch.children) {
                    if (tbc.tagName === 'TBToolbar') {
                        tools = tbc.children?.length || 0
                    }
                    if (tbc.tagName === 'TBIndicators') {
                        indicators = tbc.children?.length || 0
                    }
                    if (tbc.className === 'title') {
                        title = tbc.text
                    }
                    if (tbc.className === 'menu-box') {
                        menu = tbc.children?.length || 0
                    }
                    if (tbc.className === 'back-button') {
                        back = true
                    }
                }
            }
        }
        out += `Page "${title}"  <${Math.round(page.bounds.width)}x${Math.round(page.bounds.height)}> Back[${back}] Menu [${menu}] Tools[${tools}] Indicators[${indicators}]>\n`
    }
    return out
}

export function displayContent(comp:any, level= 0) {
    let out = '|'+('\u00A0'.repeat(level + 2))
    try {
        out += `${comp.tagName} [${comp.className || ''}]} "${comp.text}" <${Math.round(comp.bounds?.width||0)}x${Math.round(comp.bounds?.height||0)}>\n`
        for (let ch of comp.children) {
            out += displayContent(ch, level + 1)
        }
    } catch(e:any) {
        out += 'ERROR: '+e.toString()
        out += '\n'
    }
    return out
}

export function displayTree(tree:any) {
    return extractTitleBar(tree)+displayContent(tree.content)
}