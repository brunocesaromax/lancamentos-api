package com.example.lancamentoapi.model;

import lombok.Data;

import javax.persistence.Column;

@Data
class Address {
	
	private String street;
	private String number;
	private String complement;
	private String neighborhood;

	@Column(name = "zip_code")
	private String zipCode;
	private String city;
	private String state;
}
