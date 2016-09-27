const debug = require('debug')('koa-kiki-router');
const koaRouter = require('koa-router')();
const path = require('path');


function Router(app) {
    this.app = app;
}
Router.prototype.init = function (files) {
    this.files = files;
    return this;
}

Router.prototype.register = function () {
    let self = this;
    let app = self.app;
    self.files.forEach(function (routerFile) {
        let _routerClass = require(routerFile).controler;
        if (!_routerClass) {
            throw new Error('the %s file is not a controler', routerFile);
        }
        let router = new _routerClass();
        router.controlName = path.basename(routerFile, '.js');
        app.use(self._register(router));
    })
    ;
    app.use(koaRouter.allowedMethods());
}


Router.prototype._register = function (router) {
    let routerObj = null;
    if (router.actions) {
        let controlName = router.controlName;
        routerObj = koaRouter.prefix('/' + controlName);
        let routerParameter = router.requestMethod;
        for (let actionName in router.actions) {
            let funName = router.actions[actionName];
            let action = router[funName];
            let requestMethod = action.requestMethod;
            let urlParameter = action.requestMethod || routerParameter;
            routerObj[urlParameter]('/'+funName, action);
        }
        return routerObj.routes();
    }
}

module.exports = Router;
