package com.example.lancamentoapi.service;

import com.example.lancamentoapi.model.Person;
import com.example.lancamentoapi.repository.PersonRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public Person update(Long id, Person person) {

        Optional<Person> pessoaBD = personRepository.findById(id);

        if (!pessoaBD.isPresent()) {
            throw new EmptyResultDataAccessException(1);
        }

        BeanUtils.copyProperties(person, pessoaBD.get(), "id"); //Modo de update
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
}
