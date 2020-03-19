const Router = require('koa-router');
const MileageModel = require('./../models/mileage');
const router = new Router();
const DB = require("./../components/db");

router

    .get('/', async (ctx, next) => {


    })

    .post('/mileage', async (ctx, next) => {

        let { value } = ctx.request.body;

        await DB.connection();

        let model = new MileageModel({value});

        await model.save().catch(e => {
            ctx.throw(500, "error in db connection");
        });

        ctx.body = {
            "ok": true
        };
    });

module.exports = router;