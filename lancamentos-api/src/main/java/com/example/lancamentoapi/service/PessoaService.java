package com.example.lancamentoapi.service;

import com.example.lancamentoapi.model.Pessoa;
import com.example.lancamentoapi.repository.PessoaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Pessoa atualizar(Long id, Pessoa pessoa) {

        Optional<Pessoa> pessoaBD = pessoaRepository.findById(id);

        if (!pessoaBD.isPresent()) {
            throw new EmptyResultDataAccessException(1);
        }

        BeanUtils.copyProperties(pessoa, pessoaBD.get(), "id"); //Modo de atualizar
        return pessoaRepository.save(pessoaBD.get());
    }

    public void atualizarPropriedadeAtivo(Long id, Boolean ativo) {

        Optional<Pessoa> pessoaBD = pessoaRepository.findById(id);

        if (!pessoaBD.isPresent()) {
            throw new EmptyResultDataAccessException(1);
        }

        pessoaBD.get().setAtivo(ativo);
        pessoaRepository.save(pessoaBD.get());
    }

    public Pessoa buscarPeloId(Long id){
        Optional<Pessoa> pessoa = pessoaRepository.findById(id);

        return pessoa.orElse(null);

    }
}
