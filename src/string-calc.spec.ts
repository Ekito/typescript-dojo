import 'mocha';
import { expect } from 'chai';

import * as StringCalc from './string-calc';

describe('HelloWorld', () => {

    it('should say hello', () => {
        const hello = StringCalc.sayHello('girl');
        expect(hello).to.equals('Hello girl');
    })
})