const axios = require('axios');


const getCoordenadas = async (direccion) =>{
    direccion = encodeURI(direccion);
    console.log(direccion);
    const instance = axios.create({
        baseURL: `https://api.sebastian.cl/paradas/api/v1/direcciones/coordenadas?direccion=${direccion}`,
    })

    const respuesta = await instance.get()
    const dir = respuesta.data.direccion;
    console.log(dir);
    console.log();
    const lat = respuesta.data.geolocation.latitude;
    console.log(lat);
    console.log();
    const long = respuesta.data.geolocation.longitude;
    console.log(long);
    console.log();
    return {
        dir,
        lat,
        long
        }
    }



module.exports = {
    getCoordenadas
}