-- Up
CREATE TABLE User (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	email TEXT
);

INSERT INTO User (name, email) values ('genisis', 'genisis@gmail.com');

-- Down
DROP TABLE User;
