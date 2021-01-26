package com.example.lancamentoapi.repository.query;

import com.example.lancamentoapi.dto.LaunchStatisticByDay;
import com.example.lancamentoapi.dto.LaunchStatisticCategory;
import com.example.lancamentoapi.dto.LaunchStatisticPerson;
import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.repository.filter.LaunchFilter;
import com.example.lancamentoapi.repository.projection.LaunchSummary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;

public interface LaunchRepositoryQuery {

    Page<Launch> filterOut(LaunchFilter launchFilter, Pageable pageable);
    Page<LaunchSummary> sumUp(LaunchFilter launchFilter, Pageable pageable);

    List<LaunchStatisticCategory> findByCategory(LocalDate monthReference);
    List<LaunchStatisticByDay> findByDay(LocalDate monthReference);
    List<LaunchStatisticPerson> findByPerson(LocalDate start, LocalDate end);
}
