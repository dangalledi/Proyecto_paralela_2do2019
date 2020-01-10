const fs = require('fs');

//  Requiere el .json con todas las paradas (direccion y latitudes) 
//const Paradas = require('../data/paradas.json');

// Menor distancia entre punto de inicio y una parada 
const menDistancia = async (direccion) => {
    const json_paradas = fs.readFileSync('../data/paradas.json', 'utf-8');
    let paradas = JSON.parse(json_paradas);
    var menDist = 999;
    for(var i = 0; i < paradas.length;i++){
        var latParadero = direccion.latitud- paradas[i].latitud;
        var longParadero = direccion.longitud - paradas[i].longitud;
        var distancia = Math.sqrt( Math.pow(latParadero,2) + Math.pow(longParadero,2));
    
        if (menDist >= distancia) {
            menDist = distancia
            var paraderoCodigo = paradas[i].codigo;
            var paraderoDireccion = paradas[i].direccion;   
        }
    } return menDist;
}  

module.exports = {
    menDistancia
}
