const fs = require('fs');
const path = require('path');

// Menor distancia entre punto de inicio y 2 paradas mas cercanas
function menDistancia (direccion) {

    const json_paradas = fs.readFileSync(path.join(__dirname,'../data/paradas.json' ), 'utf-8');
    let paradas = JSON.parse(json_paradas);
    var menDist = 999;
    for(var i = 0; i < paradas.length ;i++){
        var latParadero = direccion.lat- paradas[i].latitud;
        var longParadero = direccion.long - paradas[i].longitud;
        var distancia = Math.sqrt( Math.pow(latParadero,2) + Math.pow(longParadero,2));

        if (menDist >= distancia) {
            menDist = distancia;

            var paraderoCodigo1 = paraderoCodigo;
            var paraderoDireccion1 = paraderoDireccion;
            var paraderoBuses1 = paraderoBuses;

            var paraderoCodigo = paradas[i].codigo;
            var paraderoDireccion = paradas[i].direccion;
            var paraderoBuses = paradas[i].buses;

            var paraderos= {
                paraderoCodigo,
                paraderoDireccion,
                paraderoBuses,
                paraderoCodigo1,
                paraderoDireccion1,
                paraderoBuses1
            };
        }
    } return paraderos
}

module.exports = {
    menDistancia
}
