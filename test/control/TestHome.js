import {method, action, parameters} from '../../decorators/decorator'

class Index {
    @action('/')
    async root(ctx, next) {
        ctx.body = 'success';
        await next;
    }

    @method('post')
    async home(ctx, next) {
        ctx.body = 'success';
        await next;
    }

    @method('get')
    @parameters(':id')
    async parameter(ctx, next) {
        ctx.body =ctx.params.id;
        await next;
    }

}

module.exports.controler = Index;
