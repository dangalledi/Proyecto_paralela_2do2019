//npm install
//docker build -t node-api .
//docker run --rm -it -p 3000:3000 -v "$(pwd):/app" node-api
const express = require("express");
var cors = require('cors');
const morgan = require('morgan');
const app = express();
const path = require('path');
const info = require(path.join(__dirname,'./utils/info'));

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors())

// routes
app.get('/dir/:dirInicio/:dirDestino', async (req, res, next) => {

    const direccionInicio = req.params.dirInicio +',santiago,chile';
    const direccionDestino= req.params.dirDestino +',santiago,chile';

    if (direccionInicio && direccionDestino ) {
      try{
        var recorrido = await info.getInfo(direccionInicio, direccionDestino);
        console.log(recorrido);
        res.json(recorrido);
      }catch(e){
        console.log(e);
      }
      
    } else {
        res.status(500).json({error: 'No se han ingresado las dos variables'});
    }
});

app.get('/coor/:coorInicio/:dirDestino', async (req, res, next) => {

  var coorInicio = req.body.coorInicio;
  const direccionDestino= req.params.dirDestino +',santiago,chile';

  if (coorInicio && direccionDestino ) {
    try{
      var recorrido = await info.getInfoCoor(coorInicio, direccionDestino);
      console.log(recorrido);
      res.json(recorrido);
    }catch(e){
      console.log(e);
    }
    
    } else {
      res.status(500).json({error: 'No se han ingresado las variables'});
      console.log(e);
  }
});

app.get('/', function (req, res, next) {
   res.send('Holi');
});


// Starting the server
var server = app.listen(app.get('port'), function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Server listening at http://%s:%s", host, port)
})
