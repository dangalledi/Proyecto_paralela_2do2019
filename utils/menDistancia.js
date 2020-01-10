const fs = require('fs');
const path = require('path');

// Menor distancia entre punto de inicio y una parada
function menDistancia (direccion) {

    const json_paradas = fs.readFileSync(path.join(__dirname,'../data/paradas.json' ), 'utf-8');
    let paradas = JSON.parse(json_paradas);
    var menDist = 999;
    for(var i = 0; i < paradas.length ;i++){
        var latParadero = direccion.lat- paradas[i].latitud;
        var longParadero = direccion.long - paradas[i].longitud;
        var distancia = Math.sqrt( Math.pow(latParadero,2) + Math.pow(longParadero,2));

        if (menDist >= distancia) {
            menDist = distancia
            var paraderoCodigo = paradas[i].codigo;
            var paraderoDireccion = paradas[i].direccion;
        }
    } return {
        menDist,
        paraderoCodigo,
        paraderoDireccion
    };
}

module.exports = {
    menDistancia
}
