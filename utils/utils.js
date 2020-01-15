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

function cartPolar (direccion){
   /* console.log(direccion + ' cartPolar');    
    console.log(direccion[0] + ' cartPolar dir lat');  */
    var latParadero = direccion[0]- direccion[3];
    var longParadero = direccion[1] - direccion[4];
    var auxR = Math.sqrt( Math.pow(latParadero,2) + Math.pow(longParadero,2));
    const auxTheta = Math.atan(direccion[0] ,direccion[1]);
    const auxGrados = Math.abs((auxTheta*180)/Math.PI);
    const auxDir = direccion[2];
    console.log(auxTheta + ' cartPolar theta');
    console.log(auxR + ' cartPolar r');
    console.log(auxGrados + ' cartPolar grds');   
    console.log();
    
    return {
    auxR,
    auxTheta,
    auxGrados,
    auxDir
    }
}

function polarCart (polar){
    const theta = (polar[1]*Math.PI)/180;
    const lat = polar[0]*Math.cos(theta);
    const long = polar[0]*Math.sin(theta);
    console.log(theta + ' polarCart theta');
    console.log(polar[0]+ ' polarCart r');
    console.log(polar[1] + ' polarCart grds'); 
    console.log(lat + ' polarCart lat'); 
    console.log(long + ' polarCart long'); 
    console.log();
    const dir ='cero';

    return{
        dir,
        lat,
        long
    }
}

function combParadero (Inicial,Final) {
    console.log(Inicial.lat + ' polar Inicial lat');
    console.log(Inicial.long + ' polar Inicial long');
    console.log(Inicial.dir + ' polar Inicial dir');
    console.log();
    const punto = [Inicial.lat,Inicial.long,Inicial.dir,Final.lat,Final.long,Final.dir];
    console.log(punto+ ' Punto' );
    const polar = cartPolar(punto);
    console.log(polar.auxR + ' polar polar');

    const gr=0;
    const g = polar.auxGrados+1;
    while (g != polar.auxGrados ){
        if ( g<=360 ){
            console.log(polar.auxR + ' polar.auxR');
            for (var r = 0.00 ; r< polar.auxR ; r=r+0.010 ){
                const pol =[r,g];
                const  cart = polarCart(pol);
                console.log('g ');
                console.log(pol + ' polarCart.dir');
    
                const aux = menDistancia (cart);
                console.log(aux.paraderoDireccion + ' polar aux direccion');
                console.log(aux.paraderoBuses + ' polar aux buses');
    
            }
            g=g+10;
        }

            
        if( gr<polar.auxGrados ){
            for (var r = 0; r< polar.auxR ; r=r+0.000010 ){
                const pol =[r,gr];
                const  cart = polarCart(pol);
                console.log('gr');
                console.log(cart + ' polarCart.dir');
    
                const aux = menDistancia (cart);
                console.log(aux.paraderoDireccion + ' polar aux direccion');
                console.log(aux.paraderoBuses + ' polar aux buses');
            }
            gr=gr +10;
        }else{
            return aux;

            }
    }
}

module.exports = {
    menDistancia,
    combParadero
}
