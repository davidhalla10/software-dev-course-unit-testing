const { calculateDiscount } = require('./main.js');

describe("calculateDiscount", function() {
    test("applies a valid discount rate", function() {
        expect(calculateDiscount(100, 0.1)).toBe(90);
    })
});