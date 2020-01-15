const path = require('path');
const get = require(path.join(__dirname,'coordenadas'));
const utils = require(path.join(__dirname,'utils'));
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
      console.log('/direcciones de get coordenadas');
      console.log();

      //Busca en paralelo ambas direcciones los paraderos mas cercanos
      console.log('paraderos de mendistancia');
      const paraderos = await Promise.all([utils.menDistancia(direcciones[0]), utils.menDistancia(direcciones[1])]);
      console.log(paraderos);
      console.log('/paraderos de mendistancia');
      console.log();
  
      //Busca mach de paraderos segun las micros 
      console.log('buses de get buses');
      const bus = await mach.getBuses(paraderos);
     /* if (bus.bus==="cero"){
        console.log();
        console.log(direcciones[0].lat+ ' dentro del if ');
        const aux = utils.combParadero(direcciones[0],direcciones[1]);
        console.log(aux+ ' info si resulta mal');
      }else{ */
        console.log(bus.bus);
        console.log(bus.dir);
        console.log('/buses de get buses');
        return bus;
    //  }
      
  
    } catch (e) {
      console.log(e);
      console.log(`No se pudo obtener informacion de ${direccionInicio} y ${direccionDestino}`)
    }
  }

  async function getInfoCoor (coorInicio, direccionDestino){
    try{

      function jsonCoordenadas (aux) {

        const valor = aux.split(",");

        const dir = 1;
        const lat = valor[0];
        const long = valor[1];

        return{
          dir,
          lat,
          long
        }

      }
      const latlongInicio = jsonCoordenadas(coorInicio);

      console.log();
      console.time('Measuring time');
      //Busca en paralelo ambas direcciones las coordenadas respectivas
      console.log('direcciones de get coordenadas');
      const direccion = await  get.getCoordenadas(direccionDestino);
      console.log(direccion);
      console.log('direcciones de get coordenadas');
      console.log();

      //Busca en paralelo ambas direcciones los paraderos mas cercanos
      console.log('paraderos de mendistancia');
      const paraderos = await Promise.all([utils.menDistancia(latlongInicio), utils.menDistancia(direccion)]);
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
      console.log(`No se pudo obtener informacion de ${coorInicio} y ${direccionDestino}`)
    }
  }
module.exports = {
    getInfo,
    getInfoCoor
}
