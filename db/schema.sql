/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database seinfeld and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  dates TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
