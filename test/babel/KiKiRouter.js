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

    it('get root request 200 ',function (done) {
        request(this.app.listen()).get('/TestHome').expect(200).end(function (error, content) {
            if (error) return done(error);
            assert.equal(content.text,'success');
            done();
        });
    })

    it('post root request 200 ',function (done) {
        request(this.app.listen()).post('/TestHome').expect(200).end(function (error, content) {
            if (error) return done(error);
            assert.equal(content.text,'success');
            done();
        });
    })

    it('home request 200',function (done) {
        request(this.app.listen()).post('/TestHome/home').expect(200).end(function (error, content) {
            if (error) return done(error);
            assert.equal(content.text,'success');
            done();
        });
    })

    it('parameter request 200 and body equal id',function (done) {
        request(this.app.listen()).get('/TestHome/parameter/success').expect(200).end(function (error, content) {
            if (error) return done(error);
            assert.equal(content.text,'success');
            done();
        });
    })


})