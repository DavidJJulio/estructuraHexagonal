# **Server**

El archivo `server.js` es responsable de manejar todas las rutas de la aplicación. Dado que el proyecto se realiza sin un framework de front-end, este archivo se encarga de gestionar todas las rutas y el uso de archivos necesarios en el proyecto. La función principal de `server.js` es inicializar el servidor, mientras que la configuración y manejo de rutas se realiza aquí.

### **Responsabilidades:**
- Manejar todas las rutas de la aplicación.
- Inicializar y configurar el servidor.

## **Middlewares**

En la carpeta `middlewares`, se encuentran archivos que manejan el procesamiento y control de solicitudes. Estos archivos ayudan a gestionar aspectos importantes como errores y limitaciones de solicitudes.

### **Archivos:**

- **`errorHandling.js`**:
  - **Responsabilidad:** Maneja errores de sintaxis en el cuerpo de las solicitudes (request body) sin detener el servidor, permitiendo que el servidor continúe funcionando incluso si hay errores en las solicitudes.

- **`rateLimit.js`**:
  - **Responsabilidad:** Limita el número de solicitudes que puede recibir el servidor desde una misma IP y bloquea bots para proteger la aplicación de abusos y sobrecargas.

## **Database**

La carpeta `database` contiene la configuración y conexión a las bases de datos utilizadas por la aplicación.

### **Responsabilidades:**
- Gestionar la conexión a las bases de datos.
- Configurar y mantener las conexiones necesarias para interactuar con la base de datos.
