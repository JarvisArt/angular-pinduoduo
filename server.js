const Koa = require('koa')
const Router = require('koa-router')
const fs = require('fs')

const app = new Koa()
const router = new Router()

fs.readdir('mock', function (err, files){
  files.forEach(filename => {
    const filenameArr = filename.split('.')
    router[filenameArr[0]](`/api/${filenameArr[1]}`, function(ctx, next) {
      ctx.set('Content-Type', 'application/json')
      ctx.set('Access-Control-Allow-Origin', '*')
      ctx.body = fs.readFileSync(`mock/${filename}`).toString()
      next()
    })
  })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
  console.log('server is starting at port 4000')
})
