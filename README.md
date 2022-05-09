# Pruebas E2E con Kraken

Para instalar Kraken siga las intrucciones de la página oficial de la herramienta:

https://thesoftwaredesignlab.github.io/Kraken/#installation

### Instrucciones para correr las pruebas

- Configure el archivo `properties.json` con las variables de su instalación y las credencciales de acceso a Ghost.
- Los escenarios de prueba de encuentran en el directorio principal. Para correr una prueba debe mover el archivo correspondiente 
a la carpeta features. Tenga en cuenta que solo debe existir un archivo `.feature` en esta ruta.
- Ejecutar el comando `./node_modules/kraken-node/bin/kraken-node run` en la ruta principal del proyecto.