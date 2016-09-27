const kikiRouter = require('../../index');
const assert = require('assert');
const request = require('supertest');
const koa = require('koa');


describe('KiKiRouter', function () {
    before(function () {
        let app = new koa();
        this.kikiRouter = new kikiRouter(app, {
            root: 'test/control'
        });
        this.kikiRouter.register();
        this.app=app;
    })

    it('#_findFiles()', function () {
        assert.equal(this.kikiRouter._findFiles().length, 1);
    });

    it('request 200',function (done) {
        request(this.app.listen()).post('/TestHome/home').expect(200).end(function (error, content) {
            if (error) return done(error);
            let html = content.text;
            done();
        });
    })
})