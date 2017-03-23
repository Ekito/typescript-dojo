import 'mocha';
import { expect, } from 'chai';

import * as StringCalc from './string-calc';

describe('HelloWorld', () => {

    it('should return zero', () => {
        const result = StringCalc.calc('');
        expect(result).to.equals(0);
    })


    it('should return single number', () => {
        const result = StringCalc.calc('42');
        expect(result).to.equals(42);
    })

    it('should return the sum with comma delimited numbers', () => {
        const result = StringCalc.calc('42,31');
        expect(result).to.equals(73);
    })

    it('should return the sum with new line delimited numbers', () => {
        const result = StringCalc.calc('42\n21');
        expect(result).to.equals(63);
    })

    it('should return the sum with 3 numbers delimited either way', () => {
        const result = StringCalc.calc('42\n21,3');
        expect(result).to.equals(66);
    })

    it('should throw an exception with negative numbers', () => {
        expect(() => StringCalc.calc('-423')).to.throw();
    })

    it('should ignore numbers > 1000', () => {
        expect(StringCalc.calc('1,2,1200')).to.equal(3);
    })

    it('should define delimiter on first line', () => {
        expect(StringCalc.calc('//#\n1#2')).to.equal(3);
    })
})