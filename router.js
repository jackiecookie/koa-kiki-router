const debug = require('debug')('koa-kiki-router');
const koaRouter = require('koa-router');
const path = require('path');


function Router(routerFile) {
    let self = this;
    let _routerClass = require(routerFile).controler;
    if (!_routerClass) {
        throw new Error('the %s file is not a controler', routerFile);
    }
    self.router = new _routerClass();
    self.router.controlName=path.basename(routerFile, '.js')
}


Router.prototype.register = function () {
    let self = this;
    let router=self.router;
    let controlName=router.controlName;
    for(let actionName in self.router.actions){
        let funName=router[actionName];
        //todo:take route url and parameter 2016.9.26
    }

}

module.exports = Router;
