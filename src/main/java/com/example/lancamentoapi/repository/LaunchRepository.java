package com.example.lancamentoapi.repository;

import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.repository.query.LaunchRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaunchRepository extends JpaRepository<Launch, Long>, LaunchRepositoryQuery {

}
