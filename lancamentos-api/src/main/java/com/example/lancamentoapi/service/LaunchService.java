package com.example.lancamentoapi.service;

import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.model.Person;
import com.example.lancamentoapi.repository.LaunchRepository;
import com.example.lancamentoapi.repository.filter.LaunchFilter;
import com.example.lancamentoapi.repository.projection.LaunchSummary;
import com.example.lancamentoapi.service.exception.PersonInexistentOrInactiveException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LaunchService {

    @Autowired
    private LaunchRepository launchRepository;

    @Autowired
    private PersonService personService;

    public Page<Launch> findAll(LaunchFilter launchFilter, Pageable pageable) {
        return launchRepository.filterOut(launchFilter, pageable);
    }

    public ResponseEntity<?> findById(Long id) {

        Optional<Launch> lancamentoBD = launchRepository.findById(id);

        if (lancamentoBD.isPresent()) {
            return ResponseEntity.ok(lancamentoBD.get());
        }

        return ResponseEntity.notFound().build();
    }

    public Launch save(Launch launch) {

        Person person = personService.buscarPeloId(launch.getPerson().getId());

        if (person == null || person.isInativo()) {
            throw new PersonInexistentOrInactiveException();
        }

        return launchRepository.save(launch);
    }

    public void delete(Long id) {
        launchRepository.deleteById(id);
    }

    public Page<LaunchSummary> sumUp(LaunchFilter launchFilter, Pageable pageable) {
        return launchRepository.sumUp(launchFilter, pageable);
    }
}
