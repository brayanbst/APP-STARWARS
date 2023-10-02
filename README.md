## Documentación de Uso de APP-STARWARS API
## Introducción
La APP-STARWARS API es una aplicación Serverless desarrollada en AWS, construida con Node.js y MySQL. Esta API, basada en el universo de Star Wars, permite realizar operaciones CRUD en recursos de planetas, con despliegue automático utilizando el framework Serverless y pruebas unitarias con Tape. Además, la estructura del código sigue el patrón de Arquitectura Hexagonal y está organizada por dominios para mantener el código limpio y modular.

## Instalación de Dependencias
Para instalar las dependencias del proyecto, ejecute el siguiente comando en la raíz del proyecto:

```
npm install
```
Este comando instalará todas las dependencias necesarias para el correcto funcionamiento de la API.

## Documentación en OpenAPI/Swagger
La documentación detallada de los endpoints de la API está disponible en Swagger/OpenAPI y puede ser accesada a través del siguiente enlace: Swagger - APP-STARWARS 
API
```
https://app.swaggerhub.com/apis-docs/brayanbst/STARWARS-API/V2#/default/post_planets
```
## Despliegue en AWS
Para desplegar la aplicación en AWS sin errores, se utiliza el comando deploy del framework Serverless.

```
npm run deploy
```
## Estructura del Proyecto
El proyecto trabaja en capas y por dominio, utilizando el patrón de Arquitectura Hexagonal, lo que facilita la mantenibilidad y testabilidad del código. Asimismo, el proyecto utiliza Knex para las migraciones automatizadas de la base de datos.

## Comandos Útiles
## Generar Migraciones:

```
npm run migrate
```
Este comando aplica las migraciones pendientes directamente a la base de datos.

## Crear Nuevas Migraciones:

```
npm run new migrate
```
Utiliza este comando para generar nuevas migraciones basadas en las tablas de la base de datos.

## Ejecutar Pruebas Unitarias:

```
npm run test
```
Realiza pruebas unitarias utilizando Tape.

## Desplegar la Aplicación:

```
npm run deploy
```
Este comando inicia el proceso de despliegue en AWS utilizando el framework Serverless.

## Ejecutar la Aplicación Localmente:

```
npm run offline
```
Utiliza este comando para ejecutar la aplicación localmente y probarla.

## Entornos de Desarrollo
El proyecto permite trabajar con diferentes entornos como:
```
Desarrollo
Producción
Test
```
## Conclusión
Este documento proporciona las instrucciones de uso y detalles pertinentes de APP-STARWARS API, permitiendo a los desarrolladores interactuar, testear y desplegar la API de manera efectiva y eficiente, asegurando así un desarrollo robusto y modular acorde a los estándares de arquitectura y calidad de software.
