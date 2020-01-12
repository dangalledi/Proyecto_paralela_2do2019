//npm install
//docker build -t node-api .
//docker run --rm -it -p 9001:3000 -v "$(pwd):/app" node-api
const express = require("express");
const morgan = require('morgan');
const app = express();
const path = require('path');
const info = require(path.join(__dirname,'./utils/info'));

// middlewares
app.use(morgan('dev'))

// routes
app.get('/:dirInicio/:dirDestino', async (req, res) => {

    const direccionInicio = req.params.dirInicio;
    const direccionDestino= req.params.dirDestino;

    if (direccionInicio && direccionDestino ) {
      var recorrido = await info.getInfo(direccionInicio, direccionDestino);
      console.log(recorrido);
      res.send(recorrido);
      
    } else {
        res.status(500).json({error: 'No se han ingresado las dos variables'});
    }
});

app.get('/hola', function (req, res) {
   res.send('Holi');
});


// Starting the server
app.listen(3000, () => {
  console.log("Server on port 3000");
});
