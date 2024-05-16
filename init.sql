-- init.sql

CREATE DATABASE IF NOT EXISTS express-api-rest;
USE express-api-rest;

CREATE TABLE IF NOT EXISTS user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO user (username, password, email) VALUES ('usuario1', '', 'usuario1@example.com');
INSERT INTO user (username, password, email) VALUES ('usuario2', '', 'usuario2@example.com');
