package com.example.lancamentoapi.repository;

import com.example.lancamentoapi.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

}
