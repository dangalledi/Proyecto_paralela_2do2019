const fs = require('fs');
const path = require('path');

function getBuses (paraderos){
    
    const json_paradas = fs.readFileSync(path.join(__dirname,'../data/paradas.json' ), 'utf-8');
    let paradas = JSON.parse(json_paradas);

    var busesParInicial = [paraderos[0].paraderoBuses,paraderos[0].paraderoBuses1];
    var busesParFinal = [paraderos[1].paraderoBuses,paraderos[1].paraderoBuses1];
    
    console.log(busesParFinal);
    console.log(busesParInicial);

    for (var i=0; i < busesParInicial.length; i++ ){
        for (var j=0; j< busesParFinal.length; j++){
            for(var k=0; k< busesParFinal[i].length; k++){
                for(var o=0; o< busesParFinal[j].length; o++){
                    if (busesParInicial[i][k]=== busesParFinal[j][k]){
                        var bus = busesParInicial[i][k];
                        console.log();
                        console.log(bus);
                        return bus;
                    }
                 }
            
             }
         }
    return 0;
    }
}

module.exports = {
    getBuses
}
