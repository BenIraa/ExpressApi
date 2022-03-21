import {truth, power} from './general.js'

describe('testing general functions with jest', () =>{
    it('compare true and true', () =>{
        const res  = truth();
        expect(res).toEqual(true);
    })
})
describe ('test power function', () => {
    let res;
    it('should raise a positive number to positive power', () =>{
        res = power(5,3);
        expect(res).toEqual(125);
    })
    it('should work for negative exponents', () => {
        res = power(2,-3);
        expect(res).toBe(0.125);
    })
    it('should work for power 0', () => {
       res = power(2,0);
       expect(res).toEqual(1)
    })
    it('should work for base 0', () => {
        res = power(0,100);
        expect(res).toEqual(0)
     })
})
