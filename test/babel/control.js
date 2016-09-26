import {controler} from '../control/TestHome';
import {method} from '../../decorators/decorator'
import assert from 'assert';

const indexControl = new controler();


describe('control', function () {
    it('method is function ', function () {
        assert.equal(typeof method, 'function');
    });

    it('index control golbal method is get method', function () {
        assert.equal(indexControl.requestMethod, 'get');
    });

    it('index control home action is post method', function () {
        assert.equal(indexControl.home.requestMethod, 'post');
    });


})