package com.example.lancamentoapi.repository.query;

import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.repository.filter.LancamentoFilter;

import java.util.List;

public interface LancamentoRepositoryQuery {

    public List<Lancamento> filtrar(LancamentoFilter lancamentoFilter);
}
