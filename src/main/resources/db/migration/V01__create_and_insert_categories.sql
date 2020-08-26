CREATE TABLE category(
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into category (name) values ('Lazer');
insert into category (name) values ('Alimentação');
insert into category (name) values ('Supermecado');
insert into category (name) values ('Farmácia');
insert into category (name) values ('Outros');
