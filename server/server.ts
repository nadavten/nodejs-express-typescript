import { productsController } from './controllers/productsController';
import * as express from 'express';

import {Utils} from '../common/utils';

export class Server{
    
    app : express.Application;

    static Start() {

        return new Server();
    }

    private constructor(){

        this.app = express();

        let port = process.env.port || 4000;

        this.app.listen(port,(err:any)=>{

            if(err==null){
                console.log(`app running on port ${port}`);
            }
        });


        //MIDDLEWARE
        this.app.use(express.static(Utils.APP_STATIC));

        this.app.use('/',(req,res,next)=>{

            console.log(`request url: ${req.url}`);
            next();
        });

        this.app.use('/products',productsController);
    }

}