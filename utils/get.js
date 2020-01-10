const axios = require('axios');


const getCoordenadas = async (direccion) =>{
    direccion = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://api.sebastian.cl/paradas/api/v1/direcciones/coordenadas?direccion=${direccion}`,
    })
    const respuesta = await instance.get()

    if( respuesta.length === 0){
        throw new Error(`No hay resultado para ${direccion}`)
    } else{
    const dir = respuesta.data.direccion;
    const lat = respuesta.data.geolocation.latitude;
    const long = respuesta.data.geolocation.longitude;
    return {
        dir,
        lat,
        long
        }
    }
}

module.exports = {
    getCoordenadas
}
