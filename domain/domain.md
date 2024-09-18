# **Domain**

La carpeta `domain` se encarga de toda la lógica de la aplicación. Aquí se centralizan los procesos que dan sentido a la aplicación, como la gestión de usuarios, búsqueda de películas, etc. El objetivo es aislar la lógica de negocio y centralizar los procesos en esta carpeta, de manera que los cambios en el código no afecten los procesos fundamentales.

### **Responsabilidades:**
- **Lógica de la Aplicación:** Maneja toda la lógica empresarial y reglas de negocio.
- **Aislamiento:** Se asegura de que los procesos se mantengan independientes de los detalles de implementación y la infraestructura.

## **Model**

La carpeta `model` se encarga de las operaciones básicas relacionadas con la base de datos, incluyendo la conexión y la realización de consultas.

### **Archivo: `userModel.js`**
- **Responsabilidad:** Maneja la conexión con la base de datos y realiza operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la entidad de usuario.

## **Repository**

La carpeta `repository` actúa como una capa intermedia que ejecuta los métodos definidos en los modelos y valida los resultados. Se encarga de coordinar la interacción entre el dominio y los modelos, asegurando que los datos sean manipulados de manera adecuada. Por ejemplo en el repositorio puede haber un metodo, que ejecute una consulta utilizando un método definido en el modelo.

### **Archivo: `userRepository.js`**
- **Responsabilidad:** Ejecuta los métodos declarados en `userModel.js`, maneja las consultas a la base de datos y valida las respuestas para garantizar que cumplan con los requisitos de la aplicación.
