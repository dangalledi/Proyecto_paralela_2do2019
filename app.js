// funcionando 
//
//docker build -t node-api .
//docker run -it -p 9001:3000 -v "$(pwd):/app" node-api
const express = require("express");
const app = express();
const rp = require('request-promise');

//  Utils
const get = require('./utils/get');
//const menDistancia = require('./utils/menDistancia');

const getInfo = async (direccion) => {
  try{
      const dir = await get.getCoordenadas(direccion);   

      const lat = await dir.geolocation.latitude;
      const long = await dir.geolocation.longitude;
      console.log(dir);
      console.log(`la latitud es ${lat} y la longitud es ${long}`);
      
    } catch (e) {
      console.log(`No se pudo obtener informacion de ${direccion}`)
    }
}

getInfo('palestrina 2710, san joaquin');


