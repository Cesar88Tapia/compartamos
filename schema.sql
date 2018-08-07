DROP DATABASE IF EXISTS clientes;

CREATE DATABASE clientes;

USE clientes;

CREATE TABLE cliente(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre varchar(50) NOT NULL,
  apellido_paterno varchar(50) NOT NULL,
  apellido_materno varchar(50) NOT NULL
);

INSERT INTO(nombre, apellido_paterno, apellido_materno) VALUES(Cesar, Tapia, Martinez),
