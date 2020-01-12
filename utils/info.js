const path = require('path');
const get = require(path.join(__dirname,'coordenadas'));
const menDistancia = require(path.join(__dirname,'menDistancia'));
const mach = require(path.join(__dirname,'mach'));

//getInfo('palestrina 2710, san joaquin', 'Gral Rondizzoni 1670,santiago');

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

module.exports = {
    getInfo
}
