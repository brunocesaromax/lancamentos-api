package com.example.lancamentoapi.controller;

import com.example.lancamentoapi.event.RecursoCriadoEvent;
import com.example.lancamentoapi.exceptionHandler.LancamentosExceptionHandler.Erro;
import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.repository.filter.LancamentoFilter;
import com.example.lancamentoapi.service.LancamentoService;
import com.example.lancamentoapi.service.exception.PessoaInexistenteOuInativaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/lancamentos")
public class LancamentoController {

    @Autowired
    private LancamentoService lancamentoService;

    @Autowired
    private ApplicationEventPublisher publisher;

    @Autowired
    private MessageSource messageSource;

    @GetMapping
    public List<Lancamento> listar(@RequestBody(required = false) LancamentoFilter lancamentoFilter) {
        return lancamentoService.buscarTodos(lancamentoFilter);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPeloId(@PathVariable Long id) {

        return lancamentoService.buscar(id);
    }

    @PostMapping
    public ResponseEntity<Lancamento> salvar(@Valid @RequestBody Lancamento lancamento, HttpServletResponse response) {

        Lancamento lancamentoSalvo = lancamentoService.salvar(lancamento);

        publisher.publishEvent(new RecursoCriadoEvent(this, response, lancamentoSalvo.getId()));

        return ResponseEntity.status(HttpStatus.CREATED).body(lancamentoSalvo);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT) // Sucesso porém sem conteúdo
    public void remover(@PathVariable Long id) {
        lancamentoService.deletar(id);
    }

    /*Como é um tratamento particular de Lançamento pode ser tratado no próprio controlador*/
    @ExceptionHandler({PessoaInexistenteOuInativaException.class})
    public ResponseEntity<Object> handlePessoaInexistenteOuInativaException(PessoaInexistenteOuInativaException ex) {

        String msgUsuario = messageSource.getMessage("pessoa.inexistente-ou-inativa", null, LocaleContextHolder.getLocale());
        String msgDev = ex.getCause() != null ? ex.getCause().toString() : ex.toString();
        List<Erro> erros = Collections.singletonList(new Erro(msgUsuario, msgDev));

        return ResponseEntity.badRequest().body(erros);
    }

}
