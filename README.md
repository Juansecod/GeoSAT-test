# Backend
### Empezando
Solo sigue estos sencillos pasos para el correcto funcionamiento de nuestra API

### Prerequisitos

Para poder utilizar este proyecto sin nungun problema necesitamos contar con las siguientes herramientas:
* [NodeJS](https://nodejs.org/es/) (Descargar la version mas reciente)
* En caso de ya tenerlo instalado, instalamaos la version mas reciente de npm
  ```sh
  npm install npm@latest -g
  ```
 * Gestor de base de datos (en este caso utilizaremos [PostgreSQL](https://www.postgresql.org/download/))
 * Un editor de texto o IDE, ya sea [Visual Studio Code](https://code.visualstudio.com/download) o el de su preferencia.
 * Opcional se puede instalar un cliente para el gestor de base de datos, en este caso usamos [DBeaver](https://dbeaver.io/download/)

### Instalacion

1. Clona el repositorio en tu maquina, para esto abrimos git bash y pegamos el siguiente comando(Tambien es valido descargar el archivo .zip y extraerlo)
   ```sh
   git clone https://github.com/Juansecod/GeoSAT-test.git
   ```
2. Nos paramos sobre la carpeta del proyecto
3. Importamos la base de datos, ya sea con el archivo sql en pgAdmin importandolo, o importando el archivo backupCatastros-DBeaver en DBeaver
4. Instalamos los paquetes con npm, abrimos la consola y pegamos el siquiente comando:
   ```sh
   npm install
4. Creamos un archivo llamado `.env` en la directorio raiz(Es de suma importancia para crear todo el entorno de trabajo). Dentro del proyecto encuentra el archivo `.env-example` con las variables requeridas.

### Inicializacion

1. Desde la terminal de su computadora ingresamos al directorio config. Como ejemplo usaremos el comando en CMD de Windows:
   ```sh
   cd config
   ```
2. Ya estando en el directorio config escribos en nuestra terminal:
   ```sh
   nodemon server.config.js ##Esto en caso de tener nodemon instalado
   ```
   o
   ```sh
   node server.config.js
   ```
