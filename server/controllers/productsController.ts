import { Utils } from './../../common/utils';
import * as bodyParser from 'body-parser';
import * as express from 'express';

class ProductsController {

    static getRouter() : express.Router{

        let router = express.Router();

        let urlJsonParser = bodyParser.json();
        //let urlEncodeParser = bodyParser.urlencoded({extended:false});

        router
            .route('/')
            .get((req,res)=>{
                //     //fs.createReadStream(`${Utils.APP_ROOT}/${Utils.APP_STATIC}/products.html`)
                //    .pipe(res);
                res.sendFile(`${Utils.APP_ROOT}/${Utils.APP_STATIC}/products.html`);
            });

        router
            .route('/:id')
            .get((req,res)=>{
                
                console.log(req.params.id);
                res.end();
            });

        router
            .route('/')
            .post(urlJsonParser,(req,res)=>{

                console.log(req.body);
                res.end();
            });

        router
            .route('/:id')
            .put(urlJsonParser,(req,res)=>{

                console.log(req.body);
                res.end();
            });

        router
            .route('/')
            .delete(urlJsonParser,(req,res)=>{

                console.log(req.body);
                res.end();
            });


        return router;
    }
}

export const productsController = ProductsController.getRouter();