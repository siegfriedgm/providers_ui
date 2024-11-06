
# e-Commerce Gapsi - Gestión de Proveedores

Este proyecto es una aplicación de React para la gestión de proveedores, con funcionalidades para listar, agregar y eliminar proveedores, implementada con Material-UI y `react-virtualized` para la visualización eficiente de datos.

## Características

- Pantalla de bienvenida con el mensaje y versión de la aplicación.
- Gestión de proveedores con las opciones de agregar y eliminar.
- Paginación virtual usando `react-virtualized`.
- Diseño responsivo usando Material-UI.
- Integración con API REST a través de `axios`.

## Requisitos previos

Para instalar y ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. **Clona este repositorio en tu máquina local:**

   ```bash
   git clone https://github.com/siegfriedgm/providers_ui.git
   cd providers_ui
   ```

2. **Instala las dependencias:**

   Usando npm:

   ```bash
   npm install
   ```

   O usando yarn:

   ```bash
   yarn install
   ```

3. **Configuración del archivo `axiosConfig.js`**

   El archivo `axiosConfig.js` debe configurarse para apuntar al endpoint de tu API REST. Asegúrate de modificar la URL base en este archivo para que apunte a la dirección correcta de tu servidor backend.

   ```javascript
   // src/components/axiosConfig.js
   import axios from 'axios';

   const axiosInstance = axios.create({
       baseURL: 'http://localhost:8080', // Cambia esta URL al endpoint de tu API
       headers: {
           'Content-Type': 'application/json'
       }
   });

   export default api;
   ```

4. **Agregar Font Awesome**

   Este proyecto utiliza íconos de Font Awesome para los botones de eliminación. Asegúrate de incluir el enlace CDN en `public/index.html` dentro del `<head>`:

   ```html
   <!-- public/index.html -->
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
     crossorigin="anonymous"
   />
   ```

## Ejecución del Proyecto

### Modo de Desarrollo

Para iniciar el proyecto en modo de desarrollo, ejecuta:

```bash
npm start
```

O si estás usando yarn:

```bash
yarn start
```

Esto iniciará la aplicación en `http://localhost:3000`, donde podrás acceder a la interfaz de usuario.

### Construcción para Producción

Para construir la aplicación para producción, usa:

```bash
npm run build
```

O si estás usando yarn:

```bash
yarn build
```

Esto generará una versión optimizada en la carpeta `build`.

## Estructura del Proyecto

- `src/App.js` - Configuración principal de la aplicación y del enrutamiento.
- `src/components/WelcomeScreen.js` - Pantalla de bienvenida.
- `src/components/ProvidersList.js` - Listado de proveedores con opciones de eliminación y vista virtualizada.
- `src/components/ProvidersForm.js` - Formulario para agregar proveedores.
- `src/components/axiosConfig.js` - Configuración de `axios` para conectar con la API backend.

## Dependencias Principales

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [react-virtualized](https://github.com/bvaughn/react-virtualized)
- [axios](https://github.com/axios/axios)
- [Font Awesome](https://fontawesome.com/)

## Nota sobre el Backend

El proyecto requiere un backend funcional que exponga los endpoints necesarios para la gestión de proveedores. Asegúrate de que tu API esté disponible en la misma URL configurada en `axiosConfig.js`.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus pull requests. Las sugerencias y mejoras son bienvenidas.

## Licencia

Este proyecto está bajo la licencia MIT.
