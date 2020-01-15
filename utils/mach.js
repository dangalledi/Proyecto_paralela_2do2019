
function getBuses (paraderos){

    var busesParInicial = [paraderos[0].paraderoBuses,paraderos[0].paraderoBuses1];
    var busesParFinal = [paraderos[1].paraderoBuses,paraderos[1].paraderoBuses1];

    const dirParInicial = [paraderos[0].paraderoDireccion,paraderos[0].paraderoDireccion1];
    const dirParFinal = [paraderos[1].paraderoDireccion,paraderos[1].paraderoDireccion1];

    for (var i=0; i < busesParInicial.length; i++ ){    // Solo busca un mach 
        for (var j=0; j< busesParFinal.length; j++){
            for(var k=0; k< busesParInicial[i].length; k++){
                for(var o=0; o< busesParFinal[j].length; o++){
                    if (busesParInicial[i][k]=== busesParFinal[j][o]){
                        var bus = busesParInicial[i][k];
                        const dir = [dirParInicial[i],dirParFinal[j]];
                        return {
                            bus,
                            dir
                        }         
                    }  
                }
            }
            
        }
    }
        bus = 'cero';
        dir = ['너는 나를 용서해','यह कोशिश की गई थी'];
    return {
        bus,
        dir
    }
}


module.exports = {
    getBuses
}
