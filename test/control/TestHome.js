import {method, control} from '../../decorators/decorator'

class Index {
    @method('post')
    async home(ctx, next) {
        ctx.body = 'success';
    }
}

module.exports.controler = Index;
