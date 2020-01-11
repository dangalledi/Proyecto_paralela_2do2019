//npm install 
//docker build -t node-api .
//docker run -it -p 9001:3000 -v "$(pwd):/app" node-api
const express = require("express");
const app = express();

//  Utils
const get = require('./utils/get');
const menDistancia = require('./utils/menDistancia');
const mach = require('./utils/mach');


async function getInfo (direccionInicio, direccionDestino){
  try{
    console.time('Measuring time');
    //Busca en paralelo ambas direcciones las coordenadas respectivas
    const direcciones = await Promise.all([get.getCoordenadas(direccionInicio), get.getCoordenadas(direccionDestino)]);

    //Busca en paralelo ambas direcciones los paraderos mas cercanos
    const paraderos = await Promise.all([menDistancia.menDistancia(direcciones[0]), menDistancia.menDistancia(direcciones[1])]);
    console.log(paraderos);

    //Busca mach de paraderos segun las micros 
    const bus = await mach.getBuses(paraderos);
    return bus;

  } catch (e) {
    console.log(e);
    console.log(`No se pudo obtener informacion de ${direccionInicio} y ${direccionDestino}`)
  }
}

//getInfo('palestrina 2710, san joaquin', 'Gral Rondizzoni 1670,santiago');

/// Settings
const port = process.env.PORT || 3000;


// Routes 
app.get("/", (req, res) => res.send(`Hello jiji!`));

app.post('/', (req, res) => {
  const { direccionInicio , direccionDestino } = req.body;
  if (direccionInicio && direccionDestino ) {
    var recorrido = getInfo(direccionInicio, direccionDestino);
    res.send(recorrido);
  } else {
      res.status(500).json({error: 'Hay un error'});
  }
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${port}`);

});
