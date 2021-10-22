import Tap from 'tap'

let desc, r, x

function sanityTest() {
    Tap.test('Sanity', t => {
        desc="Basic sanity check"
        r = 'Sanity'
        x = 'Sanity'
        t.ok(r===x, desc+` expected ${x}, got ${r}`)
        t.end()
    })
}

sanityTest()


