package com.example.lancamentoapi.controller;

import com.example.lancamentoapi.model.Categoria;
import com.example.lancamentoapi.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping
    public List<Categoria> listar() {

        return categoriaRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Categoria> salvar(@Valid @RequestBody Categoria categoria, HttpServletResponse response) {

        Categoria categoriaSalva = categoriaRepository.save(categoria);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(categoriaSalva.getId()).toUri();
        response.setHeader("Location", uri.toASCIIString());

        /*Retornando objeto criado para o cliente, facilita o desenvolvimento da parte cliente*/
        return ResponseEntity.created(uri).body(categoriaSalva);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPeloId(@PathVariable Long id){

        Optional<Categoria> categoria = categoriaRepository.findById(id);

        if (categoria.isPresent()){
            return ResponseEntity.ok(categoria.get());
        }

        return ResponseEntity.notFound().build();
    }
}
