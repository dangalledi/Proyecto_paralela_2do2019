//npm install 
//docker build -t node-api .
//docker run -it -p 9001:3000 -v "$(pwd):/app" node-api
const express = require("express");
const app = express();
//const rp = require('request-promise');

//  Utils
const get = require('./utils/get');
const menDistancia = require('./utils/menDistancia');


async function getInfo (direccionInicio, direccionDestino){
  try{
      //Busca en paralelo ambas direcciones las coordenadas respectivas
      const direcciones = await Promise.all([get.getCoordenadas(direccionInicio), get.getCoordenadas(direccionDestino)]);

      console.log(direcciones[1].lat);

      //Busca en paralelo ambas direcciones los paraderos mas cercanos
      //const distancias = await Promise.all([menDistancia.menDistancia(direcciones[0]), menDistancia.menDistancia(direcciones[1])]);

      //Busca mach de paraderos segun las micros 


    } catch (e) {
      console.log(e);
      console.log(`No se pudo obtener informacion de ${direccionInicio} y ${direccionDestino}`)
    }
}

getInfo('palestrina 2710, san joaquin', '1 de mayo 4205, pedro aguirre cerda');

/*// settings
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send(`Hello jiji!`));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${port}`);

});
*/