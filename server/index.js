import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import config from '../webpack.config';
import serverRender from './serverRenderReact';

var app = express();
if(process.env.NODE_ENV !== 'production'){
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy:{
      "*":{
        target:"http://localhost:8888"
      }
    },
    hot: true,
    historyApiFallback: true
  }).listen(8989, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:8989/');
  });
}else{
  app.use('/js',express.static('dist'));
}
app.set('views',path.join(process.cwd(),'views'));
app.set('view engine','jade');


var router =express.Router();
router.get('*',serverRender);
// router.get("*",(req,res)=> res.render('index'));

app.use(router);

app.listen(8888,()=> console.log('listening on 8888'));
