# Proyecto computación paralela

Back del proyecto semestral de computación paralela. 
La app de este proyecto se aloja en el siguiente repositorio [Link](https://github.com/AlexandraOliv14/AppMovil-Buses)

## Instalación

Primero instalamos las dependencias del proyecto 

```bash
$ npm install
```

## Uso
Este proyecto se puede ejecutar desde un container de docker 
```bash
$ docker build -t node-api .
```

```bash
$ docker run --rm -it -p 3000:3000 -v "$(pwd):/app" node-api
```

### Integrantes del proyecto
- Alexandra Olivares Solis
- Daniela Galleguillos Díaz 

