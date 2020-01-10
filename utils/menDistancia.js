const fs = require('fs');

//  Requiere el .json con todas las paradas (direccion y latitudes) 
const Paradas = require('./data/paradas.json');

const json_paradas = fs.readFileSync('./data/paradas.json', 'utf-8');
let paradas = JSON.parse(json_paradas);

const menDistancia = async (data) => {
// Menor distancia entre punto de inicio y una parada 
    var menDist = 999;
    for(var i = 0; i < paradas.length;i++){
        var latParadero =  latInicial- paradas[i].latitud;
        var longParadero = longFinal - paradas[i].longitud;
        var distancia = Math.sqrt( Math.pow(latParadero,2) + Math.pow(longParadero,2));
    
        if (menDist >= distancia) {
        menDist = distancia
        var paraderoCodigo = paradas[i].codigo;
        var paraderoDireccion = paradas[i].direccion;   
        }
    }
}
console.log(menDist);     
console.log(paraderoCodigo);   // dato para el siguiente algoritmo 
console.log(paraderoDireccion);  // Dato para mostrar en la app 

module.exports = {
    menDistancia
}
