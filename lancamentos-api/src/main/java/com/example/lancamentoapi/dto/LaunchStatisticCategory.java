package com.example.lancamentoapi.dto;

import com.example.lancamentoapi.model.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@AllArgsConstructor
@Setter
@Getter
public class LaunchStatisticCategory {

    private Category category;
    private BigDecimal total;
}
