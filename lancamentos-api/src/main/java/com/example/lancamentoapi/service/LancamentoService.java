package com.example.lancamentoapi.service;

import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.repository.LancamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LancamentoService {

    @Autowired
    private LancamentoRepository lancamentoRepository;

    public List<Lancamento> buscarTodos(){
        return lancamentoRepository.findAll();
    }

    public ResponseEntity<?> buscar(Long id){

        Optional<Lancamento> lancamentoBD = lancamentoRepository.findById(id);

        if (lancamentoBD.isPresent()) {
            return ResponseEntity.ok(lancamentoBD.get());
        }

        return ResponseEntity.notFound().build();
    }

    public Lancamento save(Lancamento lancamento) {
        return lancamentoRepository.save(lancamento);
    }
}
