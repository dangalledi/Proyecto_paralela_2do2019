const axios = require('axios');


const getCoordenadas = async (direccion) =>{
    direccion = encodeURI(direccion);
    console.log(direccion);
    const instance = axios.create({
        baseURL: `https://api.sebastian.cl/paradas/api/v1/direcciones/coordenadas?direccion=${direccion}`,
    })
    
    if( respuesta.data.length === 0){
        throw new Error(`No hay resultado para ${direccion}`)
    } else{

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
}


const getClima = async (data) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ data.lat }&lon=${ data.lng }&APPID=064525c66dd23dd428422514ddd0bbca&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getCoordenadas, getClima
}