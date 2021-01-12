package com.example.lancamentoapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TypeLaunch {
    RECIPE("Receita"),
    EXPENSE("Despesa");

    private final String description;
}
