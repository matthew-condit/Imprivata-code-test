var chai = require('chai');
var expect = chai.expect;

var mergeArrays = require('../main.js').mergeArrays;
var isPangram = require('../main.js').isPangram;
var jumpingJack = require('../main.js').jumpingJack;
var vaccinate = require('../main.js').vaccinate;

var pangramList = require('./pangrams.js').pangrams;
var nonpangramList = require('./pangrams.js').notpangrams;
console.log(pangramList);

describe('mergeArrays', function() {

    var array1 = [1, 3, 6, 9, 11, 15, 24];
    var array2 = [5, 6, 12, 13, 14, 17, 32];

    var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8];
    var array4 = [4, 4, 4, 4, 5, 7, 9];

    it('should handle empty arrays', function() {
        var result = mergeArrays([], [], 0);
        expect(result).to.be.a('array');
        expect(result).to.be.empty;
    });
    it('should sort standard arrays of equal length', function() {
        var result = mergeArrays(array1, array2);
        var expected = array1.concat(array2);
        expected.sort((a, b) =>a - b);

        expect(result).to.be.a('array');
        expect(result).to.deep.equal(expected);
        expect(result.length).to.equal(array1.length * 2);
    });
    it('should also be able to sort arrays of different lengths', function() {
        var result = mergeArrays(array3, array4);
        var expected = array3.concat(array4);
        expected.sort((a, b) => a - b);

        expect(result).to.be.a('array');
        expect(result).to.deep.equal(expected);
        expect(result.length).to.equal(array3.length + array4.length);
    })
});


describe('isPangram', function() {

    it('should handle empty strings', function() {
        expect(isPangram('')).to.equal(0);
    });
    it('should recognize valid pangrams', function() {
        pangramList.forEach( function (sentence) {
            expect(isPangram(sentence)).to.equal(1);
        })
    });
    it('should return false for sentences that are not pangrams', function() {
        nonpangramList.forEach( function (sentence) {
            expect(isPangram(sentence)).to.equal(0);
        })
    });
});

describe('jumpingJack', function() {

    it('should calculate max stair correctly', function() {
        expect(jumpingJack(2, 2)).to.equal(3);
    });
    it('should properly dodge K if it would hit it', function() {
        expect(jumpingJack(2, 1)).to.equal(2);
    });
});

describe('vaccinate', function() {
    it('should balance cities optimally', function() {
        expect(vaccinate(2, 7)).to.equal(100000);
    })
});