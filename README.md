# Información acerca de React

Este proyecto fue arrancado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

Desde el directorio raíz del proyecto puedes arrancar los siguientes comandos:

### `npm start`

Arranca la aplicación en modo desarrollador.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recarga si editas el código.\
Podrás ver cualquier error en la consola del navegador.

### `npm test`

Lanza el arrancador de test.\
Puedes encontrar contenido relacionado acerca de [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Crea la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minimizada y los nombres de archivo incluyen los hash.\
Tu aplicación está preparada para ser desplegada!

Puedes buscar acerca de [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

### `npm run eject`

**Nota: esta operación es irreversible. Una vez que ejecutes el `eject`, ya no hay vuelta atrás!**

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, puedes ejecutar `eject` en cualquier momento. Este comando eliminará la dependencia de compilación de su proyecto.

En su lugar, copiará todos los archivos de configuración y dependencias como (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto estás solo.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

No deberiás tener que utilizar `eject`. El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y utilizar esta función no debería ser necesario.

## Aprende más

Puedes aprender más acerca de [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, revisa [React documentation](https://reactjs.org/).

### Compartimentación del código

Esta información se encuentra aquí: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analizar el tamaño del paquete

Esta información se encientra aquí: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Construyendo una Progressive Web App

Esta información se encientra aquí: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Cofiguración avanzada

Esta información se encientra aquí: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Despliegue

Esta información se encientra aquí: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### npm run build falla al minificar

Esta información se encientra aquí: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Proyecto de sitio web personal

## Arrancando el proyecto para desarrollo

Para arrancar el proyecto de manera local debemos acceder mediante la consola de comandos al directorio raíz del proyecto y, una vez allí, ejecutar el comando `npm start`. Con ello, arrancará, por defecto, nuestro proyecto en el puerto 3000 de nuestro localhost, abriéndose de manera automática en el navegador.

# Personalizar el puerto de nuestro localhost

Podemos elegir otro puerto localhost para en el que arrancar la aplicación. Vamos a cambiar el puerto del 3000 al 8080. Para ello entraremos dentro del archivo `package.json` y, dentro del objeto `scripts` reemplazamos `"start": "react-scripts start" por "start"`: `"start": PORT=3001 react-scripts start"`. 

Para que este cambio se haga efectivo, iremos a la consola de comandos y pararemos el servidor con ctrl + c para, acto seguido, volver a arrancarlo con npm start.

## Personalización del título y el favicon

Por defecto, `create-react-app` nos crea una aplicación con un título y un favicon predeterminados. Nuestra primera tarea será cambiarlos por los que queremos que luzcan en nuestro sitio web.

# Personalizar el título

Dentro de la carpeta `public` tenemos el archivo `index.html`. Dentro del mismo, podemos ver la etiqueta `title`. Si cambiamos el contenido de la etiqueta, autmáticamente podremos ver reflejado el nuevo título en nuestro navegador.

# Personalizar favicon

Lo primero que vamos a hacer es crear un logo para nuestro proyecto.

En este caso y para abreviar, vamos a utilizar una página que nos facilitará la tarea. Existen varias pero en esta ocasión hemos elegido `jimdo.com`. Tras registrarnos y verificarnos podremos empezar a hacer un logo empleando las diferentes opciones que este sitio nos proporciona.

Una vez hayamos terminado, descargaremos el directorio correspondiente y lo descomprimiremos. Como resultado obtendremos una carpeta que contiene varios archivos `.png` con imágenes que se ajustan a las personalizaciones que hemos elegido en `jimdo.com`.

El siguiente paso será elegir la imagen que más nos guste y convertirla en un archivo con extensión `.ico`. Para ello utilizaremos la página `convertico.com`. Una vez dentro, exportaremos el archivo `.png` conrrespondiente y descargaremos el `.ico` resultante. En nuestro caso vamos a editar el nombre de este archivo llamándolo `w-logo.ico`.

Una vez hecho esto, pegaremos el archivo `.ico` en la carpeta public de nuestro proyecto y lo incluiremos sustituyendo `<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />` por `<link rel="icon" href="%PUBLIC_URL%/w-logo.ico" />`.

Automáticamente veremos el cambio reflejado en el navegador.
