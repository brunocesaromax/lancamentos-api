package com.example.lancamentoapi.model;

import lombok.Data;


@Data
public class Endereco {
	
	private String logradouro;
	
	private String numero;
	
	private String complemento;
	
	private String bairro;
	
	private String cep;
	
	private String cidade;
	
	private String estado;
	
}
