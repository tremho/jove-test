
export function extractTitleBar(tree:any) {
    console.log('extractTitleBar')
    let out = ''
    const page = tree.content
    let valid = true
    if (valid) valid = page._constName === 'TBPage'
    if (valid) {
        let tools=0, indicators=0, title='', menu=0, back=false
        for (let ch of page.children) {
            if (ch.className === 'tool-bar-container') {
                console.log(`tool-bar-container has ${ch.children.length} children`)
                for (let tbc of ch.children) {
                    if (tbc._constName === 'TBToolbar') {
                        tools = tbc.children?.length || 0
                    }
                    if (tbc._constName === 'TBIndicators') {
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
        out += `Page "${title}"  <${page.bounds.width}x${page.bounds.height}> Back[${back}] Menu [${menu}] Tools[${tools}] Indicators[${indicators}\n`
    }
    return out
}

export function displayContent(comp:any, level= 0) {
    let out = ' '.repeat(level + 2)
    try {
        out += `${comp._constName} [${comp.className || ''}]} "${comp.text}" <${comp.bounds?.width}x${comp.bounds?.height}>\n`
        for (let ch of comp.children) {
            out += displayContent(ch, level + 1)
        }
    } catch(e:any) {
        out += e.toString()
    }
    return out
}

export function displayTree(tree:any) {
    // console.log('display tree')
    // return JSON.stringify(tree, null, 3)
    return extractTitleBar(tree)+displayContent(tree.content)
}