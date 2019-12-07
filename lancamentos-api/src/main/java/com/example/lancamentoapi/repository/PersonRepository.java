package com.example.lancamentoapi.repository;

import com.example.lancamentoapi.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long>{

}
