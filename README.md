##APP-STARWARS Documentation

**Overview
## APP-STARWARS 
es una API REST construida utilizando el Serverless Framework. La API está alojada en AWS y utiliza Node.js como su entorno de ejecución en combinación con Lambda para manejar las solicitudes. Además, la API interactúa con una base de datos MySQL alojada en AWS RDS para realizar operaciones CRUD en los recursos de planetas. Esta API permite la creación, actualización, eliminación y recuperación de información relacionada con los planetas en el universo de Star Wars.

##Tecnologías
Serverless Framework
AWS
MySQL
Node.js
Lambda
RDS

##Endpoints
1. GET /planets
Descripción: Obtiene la lista de todos los planetas disponibles.
Parámetros:
page (query): Número de página para paginación (opcional).
limit (query): Límite de elementos por página para paginación (opcional).
Respuestas:
200 Success
2. POST /planets
Descripción: Crea un nuevo planeta con los datos proporcionados.
Cuerpo de la solicitud:
nombre (string): Nombre del planeta.
periodoRotacion (string): Período de rotación del planeta.
periodoOrbital (string): Período orbital del planeta.
... (otros campos relacionados con el planeta).
Respuestas:
201 Created
3. GET /planets/{id}
Descripción: Lista un planeta en específico de SWAPI STAR WARS, consumiendo un servicio externo.
Parámetros:
id (path): ID del planeta a listar.
Respuestas:
200 Success
4. PUT /planets/{id}
Descripción: Actualiza un planeta con los datos proporcionados.
Parámetros:
id (path): ID del planeta a actualizar.
Cuerpo de la solicitud:
nombre (string): Nombre del planeta.
periodoRotacion (string): Período de rotación del planeta.
... (otros campos relacionados con el planeta).
Respuestas:
200 Success
5. DELETE /planets/{id}
Descripción: Elimina un planeta.
Parámetros:
id (path): ID del planeta a eliminar.
Respuestas:
200 Success
Seguridad
La API utiliza AWS Signature Version 4 (sigv4) para la autenticación y autorización de solicitudes. Las solicitudes deben incluir el encabezado Authorization con el valor apropiado para ser autenticadas.

##Base de Datos
La API se comunica con una instancia de MySQL en AWS RDS para almacenar y recuperar información sobre los planetas. La estructura de la base de datos está diseñada para acomodar la información relevante relacionada con los planetas en el universo de Star Wars.

##Despliegue
La aplicación está desplegada en AWS, utilizando servicios como Lambda para la ejecución de funciones sin servidor y RDS para el alojamiento de bases de datos. Serverless Framework se utiliza para configurar y desplegar la aplicación de forma eficiente y efectiva.

Este documento proporciona una visión general de los aspectos más críticos de APP-STARWARS, permitiendo a los desarrolladores y usuarios comprender y interactuar con la API de manera efectiva.
