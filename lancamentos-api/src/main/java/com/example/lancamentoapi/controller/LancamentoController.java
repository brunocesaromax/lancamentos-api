package com.example.lancamentoapi.controller;

import com.example.lancamentoapi.event.RecursoCriadoEvent;
import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.service.LancamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/lancamentos")
public class LancamentoController {

    @Autowired
    private LancamentoService lancamentoService;

    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping
    public List<Lancamento> listar() {
        return lancamentoService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPeloId(@PathVariable Long id) {

        return lancamentoService.buscar(id);
    }

    @PostMapping
    public ResponseEntity<Lancamento> salvar(@Valid @RequestBody Lancamento lancamento, HttpServletResponse response) {

        Lancamento lancamentoSalvo = lancamentoService.save(lancamento);

        publisher.publishEvent(new RecursoCriadoEvent(this, response, lancamentoSalvo.getId()));

        return ResponseEntity.status(HttpStatus.CREATED).body(lancamentoSalvo);
    }

}
