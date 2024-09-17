# INFRASTRUCTURE

La carpeta de infrastructure contiene dependencias, conexiones a las bases de datos, librerias, configuraciones etc.
Se encarga de toda la base de la aplicacion y tecnologías utilizadas para levantar la aplicación

## server

el archivo server.js se encarga de manejar todas las rutas de la aplicación. ya que este proyecto esta realizado sin framework de front-end en el archivo server.js se manejara todas las rutas y el uso de archivos necesarios en el proyecto. En el archivo server.js se crea la función de arranque del servidor, lo único que hace app es inicializarlo.



## middlewares 

En la carpeta middlewares tenemos 2 archivos. 

**errorHandling.js**: Este archivo nos permite manejar los errores de sintaxis en el body de las request sin detener el servidor en el proceso

**rateLimit.js**: Este archivo nos permite limitar las request que puede recibir el servidor de una misma IP, también elimina a los bots la posibilidad de hacer request a nuestro aplicativo.



## database

En la carpeta database se encuentra la conexión a las bases de datos.