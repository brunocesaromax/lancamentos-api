package com.example.lancamentoapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.lancamentoapi.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
