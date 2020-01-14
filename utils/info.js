const path = require('path');
const get = require(path.join(__dirname,'coordenadas'));
const menDistancia = require(path.join(__dirname,'menDistancia'));
const mach = require(path.join(__dirname,'mach'));

//getInfo('palestrina 2710, san joaquin', 'Gral Rondizzoni 1670,santiago');

async function getInfo (direccionInicio, direccionDestino){
    try{
      console.log();
      console.time('Measuring time');
      //Busca en paralelo ambas direcciones las coordenadas respectivas
      console.log('direcciones de get coordenadas');
      const direcciones = await Promise.all([get.getCoordenadas(direccionInicio), get.getCoordenadas(direccionDestino)]);
      console.log(direcciones);
      console.log('direcciones de get coordenadas');
      console.log();

      //Busca en paralelo ambas direcciones los paraderos mas cercanos
      console.log('paraderos de mendistancia');
      const paraderos = await Promise.all([menDistancia.menDistancia(direcciones[0]), menDistancia.menDistancia(direcciones[1])]);
      console.log(paraderos);
      console.log('paraderos de mendistancia');
      console.log();
  
      //Busca mach de paraderos segun las micros 
      console.log('buses de get buses');
      const bus = await mach.getBuses(paraderos);
      console.log(bus.bus);
      console.log(bus.dir);
      console.log('buses de get buses');
      return bus;
  
    } catch (e) {
      console.log(e);
      console.log(`No se pudo obtener informacion de ${direccionInicio} y ${direccionDestino}`)
    }
  }

module.exports = {
    getInfo
}
