const Koa = require("koa");

const app = new Koa();

const bodyParser= require("koa-bodyparser");

const controller = require("./controller");

const serve = require("koa-static");

const path=require("path");

const isProduction = process.env.NODE_ENV ==="production";

//第一个middleware
app.use(async (ctx,next)=>{
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
})

//第二个middleware

app.use(bodyParser());

//第三个执行控制器路由分发
app.use(controller());

// Serve static files
app.use(serve(path.join(__dirname, 'dist')));

//监听8080端口
app.listen(3000);
console.log('app started at port 3000...');
