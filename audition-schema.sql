### Schema for Audition App

DROP DATABASE IF EXISTS audition_db;
CREATE DATABASE audition_db;
USE audition_db;

CREATE TABLE judges
(
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(55) NOT NULL,
    race VARCHAR(55) NOT NULL,
    education_level VARCHAR(55) NOT NULL,
    instrument VARCHAR(55) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE candidates
(
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(55) NOT NULL,
    race VARCHAR(55) NOT NULL,
    education_level VARCHAR(55) NOT NULL,
    instrument VARCHAR(55) NOT NULL,
    PRIMARY KEY (id)
);
USE audition_db;
CREATE TABLE scores
(
	id INT NOT NULL AUTO_INCREMENT,
    judge_number INT NOT NULL,
    candidate_number INT NOT NULL,
    comments VARCHAR(9999) NOT NULL,
    intonation INT NOT NULL,
    rhythm INT NOT NULL,
    tone INT NOT NULL,
    musicality INT NOT NULL,
    vote BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)
DROP TABLE scores
SELECT * FROM scores
