//npm install 
//docker build -t node-api .
//docker run -it -p 9001:3000 -v "$(pwd):/app" node-api
const express = require("express");
const app = express();
//const rp = require('request-promise');

//  Utils
const get = require('./utils/get');
const menDistancia = require('./utils/menDistancia');

const dirAle = [{
  latitud: '-33.4839809',
  longitud: '-70.6789174'
}]

const dirDani = [{
  latitud: '-33.4777787',
  longitud: '-70.6254457'
}]

console.log(dirAle);

const getInfo = async (direccion) => {
  try{
      //const dir = await get.getCoordenadas(direccion);

      //const lat = await dir.geolocation.latitude;
      //const long = await dir.geolocation.longitude;
      //console.log(dir);
      //console.log(`la latitud es ${lat} y la longitud es ${long}`);

      const distancia = await menDistancia.menDistancia(dirAle);
      console.log(distancia);

    } catch (e) {
      console.log(e);
      console.log(`No se pudo obtener informacion de ${direccion}`)
    }
}

getInfo('palestrina 2710, san joaquin');

/*// settings
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send(`Hello jiji!`));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${port}`);

});
*/