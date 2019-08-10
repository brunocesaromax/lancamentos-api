package com.example.lancamentoapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.lancamentoapi.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

}
