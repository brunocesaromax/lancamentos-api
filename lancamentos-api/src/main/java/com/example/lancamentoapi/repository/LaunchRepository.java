package com.example.lancamentoapi.repository;

import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.repository.query.LaunchRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface LaunchRepository extends JpaRepository<Launch, Long>, LaunchRepositoryQuery {

    boolean existsByPersonId(Long id);

    List<Launch> findByDueDateLessThanEqualAndPaydayIsNull(LocalDate date);
}
