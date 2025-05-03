CREATE TABLE estudiante (
    rut VARCHAR(20) NOT NULL,
    nombreCompleto VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    curso VARCHAR(50) NOT NULL
);

CREATE TABLE evaluacion (
    id SERIAL PRIMARY KEY,
    rut VARCHAR(20) NOT NULL,
    semestre VARCHAR(100) NOT NULL,
    evaluacion DECIMAL(3,2) NOT NULL,
    asignatura VARCHAR(50) NOT NULL
);

