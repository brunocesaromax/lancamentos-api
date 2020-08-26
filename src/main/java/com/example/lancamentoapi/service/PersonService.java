package com.example.lancamentoapi.service;

import com.example.lancamentoapi.model.Person;
import com.example.lancamentoapi.model.Person_;
import com.example.lancamentoapi.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonService {

    private final PersonRepository personRepository;

    public Person update(Long id, Person person) {

        Optional<Person> pessoaBD = personRepository.findById(id);

        if (!pessoaBD.isPresent()) {
            throw new EmptyResultDataAccessException(1);
        }

        BeanUtils.copyProperties(person, pessoaBD.get(), Person_.ID); //Modo de update
        return personRepository.save(pessoaBD.get());
    }

    public void updateFieldActive(Long id, Boolean ativo) {

        Optional<Person> pessoaBD = personRepository.findById(id);

        if (!pessoaBD.isPresent()) {
            throw new EmptyResultDataAccessException(1);
        }

        pessoaBD.get().setActive(ativo);
        personRepository.save(pessoaBD.get());
    }

    public Person findById(Long id){
        Optional<Person> pessoa = personRepository.findById(id);
        return pessoa.orElse(null);
    }

    public Page<Person> pagination(String name, Pageable pageable) {
        return personRepository.findAllByName(name, pageable);
    }
}
