### Pruebas E2E con Kraken:

**Versión de Referencia**: Ghost 4.41.3
**Versión de prueba**: Ghost 3.42

#### 1. Clonar el proyecto

git clone https://github.com/criverao/E2E_Ghost_Kraken.git

#### 2. Instalar Kraken según el turorial

Para instalar Kraken siga las intrucciones de la página oficial de la herramienta:

https://thesoftwaredesignlab.github.io/Kraken/#installation

#### 3. Instalar ResembleJs

Ejecutar `npm install resemblejs` para instalar la librería que más adelante nos permitirá generar un reporte para realizar las pruebas de regresión visual.

#### 4. Actualizar el archivo properties.json

Configure el archivo properties.json con las variables de su instalación y las credencciales de acceso a Ghost:
- Cambiar la propiedad `USER` por el usuario del `GHOST` local que se utilizará para las pruebas, debe ser un usuario administrador. 
- Cambiar la propiedad `PASSWORD` por el password del usuario del `GHOST` local que se utilizará para las pruebas. 
- Cambiar la propiedad `RUTA` por la ruta del `GHOST` loca que será usado para pruebas. 
- Cambiar la propiedad `appVersion` para indicar la versión de Ghost bajo pruebas. Se debe tener en cuenta que las pruebas únicamente son compatibles con las versiones de Ghost enunciadas anteriormente.

#### 5. Ejecutar cada archivo feature

Los escenarios de prueba se encuentran en el directorio principal. Para correr una prueba debe mover el archivo correspondiente a la carpeta features. Tenga en cuenta que solo debe existir un archivo .feature en esta ruta.

Se debe ejecutar cada archivo de forma independiente siguiendo el orden del numeral asociado al archivo para que las pruebas corran de forma correcta.

Para correr la prueba, ejecute el comando `./node_modules/kraken-node/bin/kraken-node run` en la ruta principal del proyecto.

La ejecución de cada paso en un escenario, generará una imagen de la captura de pantalla, la cual quedará almacenada en la ruta `/screenshots/{appVersion}/{featureFileName}` y con el nombre de la imagen correspondiente con el paso de la ejecución. Tenga en cuenta la importancia de variable de configuración `appVersion` para definir la ruta de los _screenshots_ y donde `featureFileName` corresponde al nombre del archivo .feature bajo ejecución.

#### 6. Generación de Reporte VRT

Una vez se hayan ejecutado una prueba en las dos versiones de la aplicación, podemos generar el reporte de la prueba de regresión visual de la siguiente manera:

1. En el archivo `config.json` ubicado en el directorio _root_ del proyecto, modifique las variables `folder1`, `folder2` y `resultsFolder`, de acuerdo con las siguiente descripciones:
    - **folder1**: directorio donde se encuentran las capturas de pantalla de la versión de referencia de la aplicación (para nuestro caso la versión v4.41.3)
    - **folder2**: directorio donde se encuentran las captura de pantalla de la versión bajo prueba de la aplicación (para nuestro caso la version v3.42)
    - **resultsFolder**: directorio donde se generará el reporte HTML.

2. Ejecute el comando `node index.js`, el cual generará el reporte con la comparación de las imágenes utilizando la ResembleJs.
3. Abra en un navegador, el archivo `report.html` ubicado en la ruta que configuró en `resultsFolder`.


