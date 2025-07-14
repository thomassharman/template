const {javascript} = require('./javascript.js')

test('test file connects to javascript', () => {
     const module = new javascript()

    expect(module.connect()).toBe(true)
})
