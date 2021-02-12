package com.example.lancamentoapi.controller;

import com.example.lancamentoapi.model.State;
import com.example.lancamentoapi.repository.StateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/states")
@RequiredArgsConstructor
public class StateController {

    private final StateRepository stateRepository;

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public List<State> list() {
        return stateRepository.findAll();
    }

}
