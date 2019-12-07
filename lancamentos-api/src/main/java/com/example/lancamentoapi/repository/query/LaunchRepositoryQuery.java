package com.example.lancamentoapi.repository.query;

import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.repository.filter.LaunchFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface LaunchRepositoryQuery {

    Page<Launch> filterOut(LaunchFilter launchFilter, Pageable pageable);
}
