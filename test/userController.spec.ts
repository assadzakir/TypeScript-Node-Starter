import UserController from '../src/controllers/UserController';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
    it('should return hello world', () => {
        const result: string = UserController.hello();

        expect(result).to.equal('Hello world!');
    });

});
