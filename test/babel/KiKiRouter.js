const kikiRouter = require('../../index');
const assert = require('assert');
const request = require('supertest');
const koa = require('koa');


describe('KiKiRouter',function () {
    before(function () {
        let app = new koa();
        this.kikiRouter=new kikiRouter(app,{
            root:'test/control'
        })
    })

    it('#_findFiles()',function () {
        assert.equal(this.kikiRouter._findFiles().length,1);
    })
})