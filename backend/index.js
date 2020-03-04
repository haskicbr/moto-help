const Koa = require('koa');
const router = require('./routes');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app
    .use(bodyParser())
    .use(async (ctx, next) => {

        try {
            await next();
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
            ctx.app.emit('error', err, ctx);
        }
    })
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);