const rewire = require("rewire")
const index = rewire("../index")
const generateLink = index.__get__("generateLink")
// @ponicode
describe("generateLink", () => {
    test("0", () => {
        let result = generateLink()
        expect(result).toMatchSnapshot()
    })
})
