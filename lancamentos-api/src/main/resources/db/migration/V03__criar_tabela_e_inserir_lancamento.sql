CREATE TABLE lancamento(
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50) NOT NULL,
	data_vencimento DATE NOT NULL,
	data_pagamento DATE,
	valor DECIMAl(10,2) NOT NULL,
	observacao VARCHAR (100),
	tipo VARCHAR (20) NOT NULL,
	categoria_id BIGINT(20) NOT NULL,
	pessoa_id BIGINT(20) NOT NULL,
	CONSTRAINT categoria_fk FOREIGN KEY (categoria_id) references categoria(id),
    CONSTRAINT pessoa_fk FOREIGN KEY (pessoa_id) references pessoa(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into lancamento (descricao, data_vencimento, data_pagamento, valor, observacao, tipo, categoria_id, pessoa_id)
values ('Salário Mensal', '2019-09-19', '2019-09-21', 150.88, null, 'DESPESA', 12, 1);
insert into lancamento (descricao, data_vencimento, data_pagamento, valor, observacao, tipo, categoria_id, pessoa_id)
values ('Lanche', '2018-02-19', '2019-09-21', 18.88, null, 'DESPESA', 12, 3);
insert into lancamento (descricao, data_vencimento, data_pagamento, valor, observacao, tipo, categoria_id, pessoa_id)
values ('Conta de luz', '2015-10-14', '2019-09-21', 180.00, null, 'DESPESA',12 , 6);
insert into lancamento (descricao, data_vencimento, data_pagamento, valor, observacao, tipo, categoria_id, pessoa_id)
values ('Internet fibra optica', '2020-03-12', '2030-09-21', 119.90, null, 'DESPESA', 12, 5);
