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
        target:"http://localhost:3000"
      }
    },
    hot: true,
    historyApiFallback: true
  }).listen(3001, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
  });
}else{
  app.use('/js',express.static('dist'));
}
app.set('views',path.join(process.cwd(),'views'));
app.set('view engine','jade');


var router =express.Router();
router.get('*',serverRender);

app.use(router);

app.listen(3000,()=> console.log('listening on 3000'));
