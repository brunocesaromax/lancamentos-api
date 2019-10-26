package com.example.lancamentoapi.repository.query;

import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.repository.filter.LancamentoFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface LancamentoRepositoryQuery {

    Page<Lancamento> filtrar(LancamentoFilter lancamentoFilter, Pageable pageable);
}
