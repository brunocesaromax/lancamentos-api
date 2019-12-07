package com.example.lancamentoapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name = "person")
@Data
public class Person {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 3, max = 50)
	private String name;
	
	@NotNull
	private Boolean active;
	
	@Embedded
	private Address address;

	@Transient
	@JsonIgnore
	public Boolean isInativo(){
		return !this.active;
	}
}
