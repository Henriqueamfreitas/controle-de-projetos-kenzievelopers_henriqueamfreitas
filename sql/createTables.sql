-- Creating the tables
    CREATE TABLE IF NOT EXISTS developers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE    
    );

    CREATE TYPE OS AS ENUM ('Windows', 'Linux', 'MacOS');

    CREATE TABLE IF NOT EXISTS developerInfos (
        id SERIAL PRIMARY KEY,
        developerSince DATE NOT NULL,
        preferredOS OS NOT NULL UNIQUE,    
        developerId INTEGER UNIQUE NOT NULL,
        FOREIGN KEY (developerId) REFERENCES developers(id) ON DELETE CASCADE
    );

-- Inserting test data into the tables
    INSERT INTO developers (name, email)
    VALUES ('teste', 'teste@kenzie.com.br');

    INSERT INTO developerInfos (developerSince, preferredOS, developerId)
    VALUES ('2023-01-02', 'MacOS', 1);

-- Getting the values from the tables
    SELECT * FROM developers; 

    SELECT * FROM developerInfos; 

    SELECT * FROM developers d
    JOIN developerInfos dI
    ON dI.developerId = d.id;

-- Before the final commit, drop the tables and then create them again (Its necessary to mantain the order below)
    DROP TABLE developerInfos;
    DROP TABLE developers;


