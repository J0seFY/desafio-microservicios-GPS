# Desafio de gestion de proyecto de software "Microservicios"

Se cuenta con 3 Microservicios:

1. **estudiante-service:** servicio para verificar la informacion de los estudiantes.
2. **evaluacion-service:** servicio para verificar la informacion de las evaluaciones.
3. **estudiante-db:** servicio para gestionar la base de datos.

A continuacion se detallan los comandos para levantar los servicios, la base de datos y las tablas se generan automaticamente, aunque no incluyen datos iniciales.
Adicionalmente se debe esperar un poco antes de probar los servicios, ya que la base de datos postgres se demora un poco en iniciar correctamente, por lo que los servicios esperan unos segundos antes de intentar conectarse para evitar errores.
Para levantar todo solo se debe usar:

```bash
docker-compose up
```

# Endpoints
## 1. estudiante-service: http://localhost:8081
### Endpoints de estudiante-service

1. **GET /estudiantes**  
    Devuelve la lista de todos los estudiantes.

2. **GET /estudiantes/:rut**  
    Devuelve la información de un estudiante específico por su rut.

3. **POST /estudiantes**  
    Crea un nuevo estudiante.  
    **Body:**  
    ```json
    {
         "rut": "string",
         "nombreCompleto": "string",
         "edad": "integer",
         "curso": "string"
    }
    ```
## 1. evaluacion-service: http://localhost:8082
### Endpoints de evaluacion-service
1. **GET /evaluaciones**  
    Devuelve la lista de todas las evaluaciones.

2. **GET /evaluaciones/:rut**  
    Devuelve la información de una evaluación específica por su rut.

3. **POST /evaluaciones**  
    Crea una nueva evaluación. Debe existir un estudiante con ese rut  
    **Body:**  
    ```json
    {
         "rut": "string",
         "semestre": "string",
         "asignatura": "string",
         "nota": "float"
    }
    ```
