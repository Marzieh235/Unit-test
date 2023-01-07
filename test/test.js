const assert = require('assert');
const calc = require('./../app/libs');


describe('calculator tests', function () {
    it('returns 1 + 31 = 32', function () {
        assert.strictEqual(calc.sum(1 , 2), 3)
    })
})


describe('calculator tests', function () {
    it('returns 2 * 31 = 62', function () {
        assert.equal(calc.mul(2 , 2), 4)
    })
})


describe('first Item' , function(){
    it('return the first element of an array' , () => {
        let result = calc.FirstItem([1 , 2 ,3]);

        assert.equal(result , 1);
    })
})