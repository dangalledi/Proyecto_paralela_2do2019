# Proyecto computación paralela

Back del proyecto semestral de computación paralela.

## Instalación

Primero instalamos las dependencias del proyecto 

```bash
$ npi install
```

## Uso
Este proyecto se puede ejecutar desde un container de docker 
```bash
$ docker build -t node-api .
```

```bash
$ docker run --rm -it -p 9001:3000 -v "$(pwd):/app" node-api
```

### Integrantes del proyecto 
- Daniela Galleguillos Díaz 
- Alexandra Olivares Solis
