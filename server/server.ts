import * as express from 'express';
import * as path from 'path';

import {Utils} from '../common/utils';

export class Server{

    private port = 4000;
    
    app : express.Application;

    productsRouter : express.Router;

    static Start() {

        return new Server();
    }

    private constructor(){

        this.app = express();

        this.app.listen(this.port,(error:any)=>{

            if(error==null){
                console.log(`app running on port ${this.port}`);
            }
        });

        this.app.use(express.static(Utils.APP_STATIC));

        this.initRoutes();
    }

    private initRoutes(){

        this.app.get('/articles',(req,res)=>{

            res.send('<h1>articles</h1>');
        });

        this.productsRouter = express.Router();

        this.productsRouter
            .route('/')
            .get((req,res)=>{
                res.sendFile(`${Utils.APP_ROOT}/${Utils.APP_STATIC}/products.html`);
        });

        this.app.use('/products',this.productsRouter);

    }

}