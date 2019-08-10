CREATE TABLE pessoa(
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	ativo BOOLEAN NOT NULL,
	logradouro VARCHAR (50),
	numero VARCHAR (5),
	complemento VARCHAR (50),
	bairro VARCHAR (50),
	cep VARCHAR (10),
	cidade VARCHAR (25),
	estado VARCHAR (25)
	
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into pessoa (nome,ativo,logradouro,numero,complemento,bairro,cep,cidade,estado) 
values ('Bruno',true,'Rua 1','SN','qd 5 lt 44','Jardim Itaipu','74355509','Goiânia','Goiás');
insert into pessoa (nome,ativo,logradouro,numero,complemento,bairro,cep,cidade,estado) 
values ('Jessica',false,'Rua 4','SN','qd 10 lt 89','Jardim Itaipu','74355510','Goiatuba','Goiás');
insert into pessoa (nome,ativo,logradouro,numero,complemento,bairro,cep,cidade,estado) 
values ('Marcos',true,'Rua 5','SN','qd 90 lt 02','Cidade Jardim','7897949','Goiânia','Goiás');
insert into pessoa (nome,ativo,logradouro,numero,complemento,bairro,cep,cidade,estado) 
values ('Carlos Lacerda',true,'Rua 1','SN','qd 5 lt 44','Jardim Itaipu','74355509','Goiânia','Goiás');
insert into pessoa (nome,ativo,logradouro,numero,complemento,bairro,cep,cidade,estado) 
values ('Danila',true,'Rua 1','SN','qd 89 lt 34','Jardim Itaipu','71325509','Goiânia','Goiás');
insert into pessoa (nome,ativo,logradouro,numero,complemento,bairro,cep,cidade,estado) 
values ('Geisson',true,'Rua 9','SN','qd 3 lt 20','Centro','4567982','Goiânia','Goiás');
insert into pessoa (nome,ativo,logradouro,numero,complemento,bairro,cep,cidade,estado) 
values ('Valdevan',true,'Rua 56','SN','qd 1 lt 02','Residencial Itaipu','74355521','Goiânia','Goiás');
insert into pessoa (nome,ativo,logradouro,numero,complemento,bairro,cep,cidade,estado) 
values ('Mel',true,'Rua 67','SN','qd 3 lt 14','Setor Oeste','1234567','Goiânia','Goiás');
