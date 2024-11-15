# NODE PROJECT

## Descripción
Este proyecto consta de tres ejercicios diseñados para aprender los fundamentos de Node.js, el manejo de dependencias con NPM, y el uso del módulo `logplease`. Cada ejercicio está separado en carpetas independientes con su propia configuración.

---

## Ejercicio 1

### Instrucciones
1. **Crear la carpeta y el proyecto:**
   - Crear una carpeta llamada `ej1`.
   - Inicializar un proyecto de Node.js dentro de la carpeta:
     ```bash
     mkdir ej1
     cd ej1
     npm init -y
     ```
   - Cambiar el nombre del proyecto en `package.json` a `ejercicio-1`.

2. **Configurar el archivo principal:**
   - Crear un archivo `index.js` en la raíz de la carpeta y añadir el siguiente código:
     ```javascript
     console.log("Mi primer script en The Bridge!!!");
     ```

3. **Configurar el comando `start`:**
   - En el archivo `package.json`, modificar la sección `scripts`:
     ```json
     "scripts": {
       "start": "node index.js"
     }
     ```

4. **Ejecutar el programa:**
   - Ejecutar el comando:
     ```bash
     npm start
     ```
   - Verificar que se muestra en consola:
     ```
     Mi primer script en The Bridge!!!
     ```

---

## Ejercicio 2

### Instrucciones
1. **Crear la carpeta y el proyecto:**
   - Crear una carpeta llamada `ej2`:
     ```bash
     mkdir ej2
     cd ej2
     npm init -y
     ```
   - Cambiar el nombre del proyecto en `package.json` a `ejercicio-2`.

2. **Instalar dependencias:**
   - Instalar el módulo `logplease` como dependencia de desarrollo:
     ```bash
     npm install logplease --save-dev
     ```

3. **Configurar el archivo principal:**
   - Crear un archivo `index.js` en la raíz de la carpeta y añadir el siguiente código:
     ```javascript
     const logplease = require('logplease');
     const logger = logplease.create('logger');

     logger.debug("Hola Mundo de Node");
     logger.info("Noticias de última hora, Node.js me encanta!!");
     logger.warn("Tirando warnings como campeones");
     logger.error("Algo no está bien!!!");
     ```

4. **Configurar el comando `start`:**
   - En el archivo `package.json`, modificar la sección `scripts`:
     ```json
     "scripts": {
       "start": "node index.js"
     }
     ```

5. **Ejecutar el programa:**
   - Ejecutar el comando:
     ```bash
     npm start
     ```
   - Verificar que aparecen los mensajes en la consola.

---

## Ejercicio 3

### Instrucciones
1. **Crear la carpeta y el proyecto:**
   - Crear una carpeta llamada `ej3`:
     ```bash
     mkdir ej3
     cd ej3
     npm init -y
     ```
   - Cambiar el nombre del proyecto en `package.json` a `ejercicio-3`.

2. **Crear los archivos:**
   - Crear un archivo `index.js`.
   - Crear un archivo `numeros.js`.

3. **Definir y exportar la función en `numeros.js`:**
   - Escribir el siguiente código en `numeros.js`:
     ```javascript
     function esPar(numero) {
       return numero % 2 === 0;
     }

     module.exports = esPar;
     ```

4. **Instalar dependencias:**
   - Instalar el módulo `logplease` como dependencia de desarrollo:
     ```bash
     npm install logplease --save-dev
     ```

5. **Configurar el archivo `index.js`:**
   - Escribir el siguiente código en `index.js`:
     ```javascript
     const logplease = require('logplease');
     const esPar = require('./numeros');
     const logger = logplease.create('logger');

     const numeros = [2, 3, 101, 201, 202, 100];

     numeros.forEach(num => {
       if (esPar(num)) {
         logger.info(`El número ${num} es par`);
       } else {
         logger.error(`El número ${num} no es par`);
       }
     });
     ```

6. **Configurar el comando `start`:**
   - En el archivo `package.json`, modificar la sección `scripts`:
     ```json
     "scripts": {
       "start": "node index.js"
     }
     ```

7. **Ejecutar el programa:**
   - Ejecutar el comando:
     ```bash
     npm start
     ```
   - Verificar que se muestran los mensajes para cada número.

---
