package com.example.lancamentoapi.repository;

import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.repository.query.LancamentoRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long>, LancamentoRepositoryQuery {

}
