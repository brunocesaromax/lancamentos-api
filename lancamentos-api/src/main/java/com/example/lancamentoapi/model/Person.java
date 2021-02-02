package com.example.lancamentoapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;


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

	@Valid
	@JsonIgnoreProperties("person")
	@OneToMany(mappedBy = "person", cascade = CascadeType.ALL)
	private List<Contact> contacts;

	@Transient
	@JsonIgnore
	public Boolean isInactive(){
		return !this.active;
	}
}
