package com.example.lancamentoapi.service;

import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.model.Pessoa;
import com.example.lancamentoapi.repository.LancamentoRepository;
import com.example.lancamentoapi.repository.filter.LancamentoFilter;
import com.example.lancamentoapi.service.exception.PessoaInexistenteOuInativaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LancamentoService {

    @Autowired
    private LancamentoRepository lancamentoRepository;

    @Autowired
    private PessoaService pessoaService;

    public List<Lancamento> buscarTodos(LancamentoFilter lancamentoFilter) {
        return lancamentoRepository.filtrar(lancamentoFilter);
    }

    public ResponseEntity<?> buscar(Long id) {

        Optional<Lancamento> lancamentoBD = lancamentoRepository.findById(id);

        if (lancamentoBD.isPresent()) {
            return ResponseEntity.ok(lancamentoBD.get());
        }

        return ResponseEntity.notFound().build();
    }

    public Lancamento salvar(Lancamento lancamento) {

        Pessoa pessoa = pessoaService.buscarPeloId(lancamento.getPessoa().getId());

        if (pessoa == null || pessoa.isInativo()) {
            throw new PessoaInexistenteOuInativaException();
        }

        return lancamentoRepository.save(lancamento);
    }

    public void deletar(Long id) {
        lancamentoRepository.deleteById(id);
    }
}
