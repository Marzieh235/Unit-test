const assert = require('chai').assert;
const expect = require('chai').expect;
const libs = require('./../app/libs');


describe('calculator tests', function () {
    it('returns 1 + 31 = 32', function () {
        // assert.strictEqual(libs.sum(1, 2), 3)

        expect(libs.sum(1 , 2)).to.equal(3)
    })
})


describe('calculator tests', function () {
    it('returns 2 * 31 != 61', function () {
        // assert.equal(libs.mul(2, 2), 4)

        expect(libs.mul(2 ,2)).to.not.equal(5);
    })
})


describe('first Item', function () {
    it('return the first element of an array', () => {
        let result = libs.FirstItem([1, 2, 3]);

        // assert.equal(result, 1);

        expect(result).to.equal(1);
    })
})

describe('async test', () => {
    it('callback : eventually returns the results', (done) => {
        let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let filter = (item) => item % 2 == 0;


        libs.delayfilterwithCallback(input, filter, (result) => {
            // assert.deepEqual(result, [2, 4, 6, 8])

            expect(result).to.deep.equal([2,4,6,8]);
            expect(result).to.have.lengthOf(4);

            done();
        })
    })




    it('promise : eventually returns the results', () => {
        let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let filter = (item) => item % 2 == 0;


        return libs.delayfilterwithPromise(input, filter).then(result => {
            // assert.deepEqual(result, [2, 4, 6, 8]);

            expect(result).deep.equal([2,4,6,8]);
        })
    })



    it('async : eventually returns the results', async () => {
        let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let filter = (item) => item % 2 == 0;

        let result = await libs.delayfilterwithPromise(input, filter)
        // assert.deepEqual(result, [2, 4, 6, 8]);

        expect(result).deep.equal([2,4,6,8]);

    })


})    
