# API RESTFull Almundo

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar:

### `yarn install`

Instala las dependencias que necesita la API para su funcionamiento.

### `yarn start`

Ejecuta la aplicación en el modo de desarrollo.<br>
Abre [http://localhost:3001](http://localhost:3001) en el navegador.

## Enpoints disponibles

### Listar Hoteles 
- Tipo Endpoind: `GET`
- URL Endpoing: `[domain:port]/api/hotels`

>**Retorna todos los hoteles.**

### Buscar Hoteles por ID 
- Tipo Endpoind: `GET`
- URL Endpoing: `[domain:port]/api/hotels/277990`

>**Retorna un solo hotel.**

### Filtrar Hoteles por según el Nombre o las Estrellas 
- Tipo Endpoind: `GET`
- URL Endpoing: `[domain:port]/api/hotels/search?name=hotel&stars=4,1`

>**Retorna uno o varios hoteles.**

### Crear Hoteles 
- Tipo Endpoind: `POST`
- URL Endpoing: `[domain:port]/api/hotels`

>**Proximamente.**

### Actulizar Hoteles 
- Tipo Endpoind: `PUT`
- URL Endpoing: `[domain:port]/api/hotels/277990`

>**Proximamente.**

### Eliminar Hoteles
- Tipo Endpoind: `DELETE`
- URL Endpoing: `[domain:port]/api/hotels/277990`

>**Proximamente.**

## Estructura de Carpetas

```
api-almundo/
  README.md
  package.json
  app.js
  node_modules/
  public/
    data/
        hotels.json
  src/
    controllers/
        hotels.js
    routes.js
```

Para el funcionamiento correcto de la API los **siguientes archivos deben de exitir**:

* `app.js`
* `public/data/hotels.json`
* `src/route.js`
* `src/controllers/hotels.js`



