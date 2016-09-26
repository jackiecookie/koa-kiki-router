const path = require('path');
const fs = require('fs');
require("babel-register");
const router = require('./router');


function KiKiRouter(app, options) {
    let self = this;
    if (typeof options === 'string') {
        options = {
            root: options
        };
    } else if (!options || !options.root) {
        throw new Error('`root` config required.');
    }
    self.root = options.root;

    let files = self._findFiles();

    if (files.length <= 0)throw new Error('root file did not has any root files');

    files.forEach(function (routerFile) {
        let _router=new router(routerFile);
        _router.register();
    })
}


/*
 * find all files from path
 * @dir {string} path dir
 * @return file dir list
 * */
KiKiRouter.prototype._findFiles = function () {
    let dir=this.root;
    let result = [];
    if (!path.isAbsolute(dir)) {
        dir = path.join(process.cwd(), dir);
    }
    let stat = fs.lstatSync(dir);
    let files = fs.readdirSync(dir);
    files.forEach(function (part) {
        if (path.extname(part) === '.js') {
            result.push(path.join(dir,part));
        }
    });
    return result;
}


module.exports = KiKiRouter;