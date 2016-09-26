import {method} from '../../decorators/decorator'

@method('get')
 class Index{
    @method('post')
    home(){

    }
}

module.exports.controler=Index;
