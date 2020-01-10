//https://api.sebastian.cl/paradas/api/v1/recorridos/paradas/recorrido?numeroBus= 

// listado de paradas asociadas a un bus 

class Parada {    //extrae archivos de json
    constructor(codigo,direccion,latitud,longitud){
        this.codigo = '';
        this.direccion = '';
        this.latitud = -33.4372;
        this.longitud = -70.6506;
    }
    set codigo(codigo){
        this._codigo = codigo;
    }
    set direccion(direccion){
        this._direccion = direccion;
    }
    set latitud(latitud){
        this._latitud = latitud;
    }
    set longitud(longitud){
        this._codig_longitud = longitud;
    }
    get codigo(){
        return this._codigo;
    }
    get direccion(){
        return this._direccion ;
    }
    get latitud(){
        return this._latitud;
    }
    get longitud(){
        return this._codig_longitud ;
    }
}



/*
    const asd = await respuesta.data;
    console.log(asd);
    console.log();
    const dir = await respuesta.data.direccion;
    //console.log(dir);
    console.log();
    const lat = await respuesta.data.geolocation.latitude;
    console.log(lat);
    console.log();
    const long = await respuesta.data.geolocation.longitude;
    console.log(long);
    console.log();
    return {
        dir,
        lat,
        long
    }


const asd = new Parada();
console.log(asd);
asd.codigo = 'jkdfgjkfl';
console.log(asd)
*/


/*
const dir =  'uno de mayo';

// GetCoordenadas, consulta las coordenadas de una direccion a API
const GetCoordenadas = {
  uri: 'https://api.sebastian.cl/paradas/api/v1/direcciones/coordenadas',
  qs: {
      direccion : dir // -> uri + '?direccion=xxxxx%20xxxxx'
  },
  json: true // Automatically parses the JSON string in the response
};

rp(GetCoordenadas)
  .then(function (repos) {
    latInicial = repos.geolocation.latitude;
    console.log(latInicial);
    var longInicial = repos.geolocation.longitude;
    console.log(longInicial);
    return latInicial , longInicial;
  })
  .catch(function (err) {
  console.log('chale wei');
      // API call failed...
  });
*/

/*

// palestrina
const latitud = '-33.4777787';
const longitud = '-70.6254457';


//uno de mayo 
const latitud = '-33.4839809';
const longitud = '-70.6789174';
*/

























/*
// settings
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send(`Hello jiji!`));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${port}`);

});


// De aqui lo saque :) 
// https://tutorialedge.net/docker/working-with-docker-nodejs/
// https://www.youtube.com/watch?v=CsWoMpK3EtE


// Usamos este objeto para que el código sea accesible desde cualquier parte de nuestra aplicación
module.exports = config;

*/



  { status: 200,
    statusText: '',
    headers: 
     { date: 'Fri, 10 Jan 2020 05:00:14 GMT',
       server: 'Apache/2.4.29 (Ubuntu)',
       'strict-transport-security': 'max-age=15768000',
       'content-type': 'application/json;charset=UTF-8',
       'access-control-allow-methods': 'POST, GET, OPTIONS, DELETE, PUT',
       'access-control-max-age': '1000',
       'access-control-allow-headers': 'X-API-APP, X-API-KEY, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, authorization, client-se$',
       'access-control-expose-headers': 'jwt, dispositivo, apikey, Location',
       connection: 'close',
       'transfer-encoding': 'chunked' },
    config: 
     { method: 'get',
       headers: 
        { Accept: 'application/json, text/plain, */*',
          'User-Agent': 'axios/0.19.1' },
       baseURL: 'https://api.sebastian.cl/paradas/api/v1/direcciones/coordenadas?direccion=palestrina%202710,%20san%20joaquin',
       transformRequest: [ [Function: transformRequest] ],
       transformResponse: [ [Function: transformResponse] ],
       timeout: 0,
       adapter: [Function: httpAdapter],
       xsrfCookieName: 'XSRF-TOKEN',
       xsrfHeaderName: 'X-XSRF-TOKEN',
       maxContentLength: -1,
       validateStatus: [Function: validateStatus],
       data: undefined },
    request: 
     ClientRequest {
       _events: 
        { socket: [Function],
          abort: [Function],
          aborted: [Function],
          error: [Function],
          timeout: [Function],
          prefinish: [Function: requestOnPrefinish] },
       _eventsCount: 6,
       _maxListeners: undefined,
       output: [],
       outputEncodings: [],
       outputCallbacks: [],
       outputSize: 0,
       writable: true,
       _last: true,
       upgrading: false,
       chunkedEncoding: false,
       shouldKeepAlive: false,
       useChunkedEncodingByDefault: false,
       sendDate: false,
       _removedConnection: false,
       _removedContLen: false,
       _removedTE: false,
       _contentLength: 0,
       _hasBody: true,
       _trailer: '',
       finished: true,
       _headerSent: true,
       socket: 
        TLSSocket {
          _tlsOptions: [Object],
          _secureEstablished: true,
          _securePending: false,
          _newSessionPending: false,
          _controlReleased: true,
          _SNICallback: null,
          servername: 'api.sebastian.cl',
          npnProtocol: undefined,
          alpnProtocol: false,
          authorized: true,
          authorizationError: null,
          encrypted: true,
          _events: [Object],
          _eventsCount: 8,
          connecting: false,
          _hadError: false,
          _handle: null,
          _parent: null,
          _host: 'api.sebastian.cl',
          _readableState: [ReadableState],
          readable: false,
          _maxListeners: undefined,
          _writableState: [WritableState],
          writable: false,
          _bytesDispatched: 213,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          allowHalfOpen: false,
          server: undefined,
          _server: null,
          ssl: null,
          _requestCert: true,
          _rejectUnauthorized: true,
          parser: null,
          _httpMessage: [Circular],
          _idleNext: null,
          _idlePrev: null,
          _idleTimeout: -1,
          [Symbol(res)]: [TLSWrap],
          [Symbol(asyncId)]: 9,
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(bytesRead)]: 729,
          [Symbol(connect-options)]: [Object] },
       connection: 
        TLSSocket {
          _tlsOptions: [Object],
          _secureEstablished: true,
          _securePending: false,
          _newSessionPending: false,
          _controlReleased: true,
          _SNICallback: null,
          servername: 'api.sebastian.cl',
          npnProtocol: undefined,
          alpnProtocol: false,
          authorized: true,
          authorizationError: null,
          encrypted: true,
          _events: [Object],
          _eventsCount: 8,
          connecting: false,
          _hadError: false,
          _handle: null,
          _parent: null,
          _host: 'api.sebastian.cl',
          _readableState: [ReadableState],
          readable: false,
          _maxListeners: undefined,
          _writableState: [WritableState],
          writable: false,
          _bytesDispatched: 213,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          allowHalfOpen: false,
          server: undefined,
          _server: null,
          ssl: null,
          _requestCert: true,
          _rejectUnauthorized: true,
          parser: null,
          _httpMessage: [Circular],
          _idleNext: null,
          _idlePrev: null,
          _idleTimeout: -1,
          [Symbol(res)]: [TLSWrap],
          [Symbol(asyncId)]: 9,
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(bytesRead)]: 729,
          [Symbol(connect-options)]: [Object] },
       _header: 'GET /paradas/api/v1/direcciones/coordenadas?direccion=palestrina%202710,%20san%20joaquin HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nUser-Agent: axios/0.19.1\r\nHost: api.sebastian.cl\r\nConnection: close\r\n\r\n',
       _onPendingData: [Function: noopPendingOutput],
       agent: 
        Agent {
          _events: [Object],
          _eventsCount: 1,
          _maxListeners: undefined,
          defaultPort: 443,
          protocol: 'https:',
          options: [Object],
          requests: {},
          sockets: [Object],
          freeSockets: {},
          keepAliveMsecs: 1000,
          keepAlive: false,
          maxSockets: Infinity,
          maxFreeSockets: 256,
          maxCachedSessions: 100,
          _sessionCache: [Object] },
       socketPath: undefined,
       timeout: undefined,
       method: 'GET',
       path: '/paradas/api/v1/direcciones/coordenadas?direccion=palestrina%202710,%20san%20joaquin',
       _ended: true,
       res: 
        IncomingMessage {
          _readableState: [ReadableState],
          readable: false,
          _events: [Object],
          _eventsCount: 3,
          _maxListeners: undefined,
          socket: [TLSSocket],
          connection: [TLSSocket],
          httpVersionMajor: 1,
          httpVersionMinor: 1,
          httpVersion: '1.1',
          complete: true,
          headers: [Object],
          rawHeaders: [Array],
          trailers: {},
          rawTrailers: [],
          upgrade: false,
          url: '',
          method: null,
          statusCode: 200,
          statusMessage: '',
          client: [TLSSocket],
          _consuming: true,
          _dumped: false,
          req: [Circular],
          responseUrl: 'https://api.sebastian.cl/paradas/api/v1/direcciones/coordenadas?direccion=palestrina%202710,%20san%20joaquin',
          redirects: [],
          read: [Function] },
       aborted: undefined,
       timeoutCb: null,
       upgradeOrConnect: false,
       parser: null,
       maxHeadersCount: null,
       _redirectable: 
        Writable {
          _writableState: [WritableState],
          writable: true,
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _options: [Object],
          _redirectCount: 0,
          _redirects: [],
          _requestBodyLength: 0,
          _requestBodyBuffers: [],
          _onNativeResponse: [Function],
          _currentRequest: [Circular],
          _currentUrl: 'https://api.sebastian.cl/paradas/api/v1/direcciones/coordenadas?direccion=palestrina%202710,%20san%20joaquin' },
       [Symbol(isCorked)]: false,
       [Symbol(outHeadersKey)]: { accept: [Array], 'user-agent': [Array], host: [Array] } },
    data: 
     { direccion: 'palestrina 2710, san joaquin, Región Metropolitana, Chile',
       geolocation: { latitude: -33.4766965, longitude: -70.62570889999999 } } 
    }