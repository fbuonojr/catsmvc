### Schema

CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE cats
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    sleepy BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);