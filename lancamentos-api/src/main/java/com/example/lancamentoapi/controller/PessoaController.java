package com.example.lancamentoapi.controller;

import com.example.lancamentoapi.event.RecursoCriadoEvent;
import com.example.lancamentoapi.model.Pessoa;
import com.example.lancamentoapi.repository.PessoaRepository;
import com.example.lancamentoapi.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private ApplicationEventPublisher publisher;

    @Autowired
    private PessoaService pessoaService;

    @GetMapping
    public List<Pessoa> listar() {

        return pessoaRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Pessoa> salvar(@Valid @RequestBody Pessoa pessoa, HttpServletResponse response) {

        Pessoa pessoaSalva = pessoaRepository.save(pessoa);

        publisher.publishEvent(new RecursoCriadoEvent(this, response, pessoaSalva.getId()));

        return ResponseEntity.status(HttpStatus.CREATED).body(pessoaSalva);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPeloId(@PathVariable Long id) {

        Optional<Pessoa> pessoa = pessoaRepository.findById(id);

        if (pessoa.isPresent()) {
            return ResponseEntity.ok(pessoa.get());
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT) // Sucesso porém sem conteúdo
    public void remover(@PathVariable Long id) {
            pessoaRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pessoa> atualizar(@PathVariable Long id, @Valid @RequestBody Pessoa pessoa) {

        Pessoa pessoaBD = pessoaService.atualizar(id, pessoa);
        return ResponseEntity.ok(pessoaBD);
    }

    @PutMapping("/{id}/ativo")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarAtributoAtivo(@PathVariable Long id, @RequestParam Boolean ativo) {
        pessoaService.atualizarPropriedadeAtivo(id, ativo);
    }

}
