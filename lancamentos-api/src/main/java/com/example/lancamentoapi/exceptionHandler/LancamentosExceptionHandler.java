package com.example.lancamentoapi.exceptionHandler;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

// Captura exceções de ResponseEntities
@ControllerAdvice // Observa toda a aplicação
public class LancamentosExceptionHandler extends ResponseEntityExceptionHandler {

    @Autowired
    private MessageSource messageSorce;

    // Capturar mensagens que não conseguiram ler
    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
                                                                  HttpHeaders headers, HttpStatus status, WebRequest request) {

        String msgUsuario = messageSorce.getMessage("mensagem.invalida", null, LocaleContextHolder.getLocale());
        String msgDev = ex.getCause() != null ? ex.getCause().toString() : ex.toString();
        List<Erro> erros = Collections.singletonList(new Erro(msgUsuario, msgDev));

        return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers, HttpStatus status, WebRequest request) {

        List<Erro> erros = getListaErros(ex.getBindingResult());
        return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
    }

    //	Tratando exceção do tipo abaixo
    @ExceptionHandler({ConstraintViolationException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException ex, WebRequest request) {

        String msgUsuario = messageSorce.getMessage("recurso.nao-encontrado", null, LocaleContextHolder.getLocale());
        String msgDev = ex.toString();
        List<Erro> erros = Arrays.asList(new Erro(msgUsuario, msgDev));

        return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.NOT_FOUND, request);

    }

    /*@ExceptionHandler({DataAccessResourceFailureException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handleEmptyResultDataAccessException(DataAccessResourceFailureException ex, WebRequest request) {

        String msgUsuario = messageSorce.getMessage("recurso.operacao-nao-permitida", null, LocaleContextHolder.getLocale());

        *//*Pegando erro mais descritivo através da biblioteca commons-lang3*//*
        String msgDev = ExceptionUtils.getRootCauseMessage(ex);
        List<Erro> erros = Arrays.asList(new Erro(msgUsuario, msgDev));

        return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);

    }*/

    private List<Erro> getListaErros(BindingResult bindingResult) {

        List<Erro> erros = new ArrayList<>();

//		Retornar todos os erros nos campos do objeto
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            String msgUsuario = messageSorce.getMessage(fieldError, LocaleContextHolder.getLocale());
            String msgDev = fieldError.toString();
            erros.add(new Erro(msgUsuario, msgDev));
        }

        return erros;

    }

    public static class Erro {

        private String msgUsuario;
        private String msgDev;

        public Erro(String msgUsuario, String msgDev) {
            super();
            this.msgUsuario = msgUsuario;
            this.msgDev = msgDev;
        }

        public String getMsgUsuario() {
            return msgUsuario;
        }

        public void setMsgUsuario(String msgUsuario) {
            this.msgUsuario = msgUsuario;
        }

        public String getMsgDev() {
            return msgDev;
        }

        public void setMsgDev(String msgDev) {
            this.msgDev = msgDev;
        }

    }

}
