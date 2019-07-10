CREATE DATABASE db_Articulos;

USE db_Articulos;

-- TABLA USUARIOS
-- todas las contraseñas seran incriptadas
CREATE TABLE usuarios (
  id INT(11) NOT NULL,
  nombreUsuario VARCHAR(16) NOT NULL,
  contrasena VARCHAR(60) NOT NULL,
  nombreCompleto VARCHAR(100) NOT NULL
);

ALTER TABLE usuarios
  ADD PRIMARY KEY (id);

ALTER TABLE usuarios
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE usuarios;

INSERT INTO usuarios (id, nombreUsuario, contrasena, nombreCompleto) 
  VALUES (1, 'calix', 'nose', 'Eduardo Calix');

SELECT * FROM usuarios;

-- Tabla de Articulos
CREATE TABLE Articulos (
  id INT(11) NOT NULL,
  title VARCHAR(150) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE links
  ADD PRIMARY KEY (id);

ALTER TABLE links
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;