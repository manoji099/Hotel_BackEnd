import * as koa from 'koa';
import * as router from 'koa-router';


const app = new koa();

const route = new router();

route.get("/a", ctx => {
    ctx.response.body = " koa url has invoked correctly";
})

app.use(route.routes());

app.listen(process.env.PORT || 3010, () => console.log("koa server is running"));