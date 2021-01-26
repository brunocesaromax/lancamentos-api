package com.example.lancamentoapi.service;

import com.example.lancamentoapi.dto.LaunchStatisticByDay;
import com.example.lancamentoapi.dto.LaunchStatisticCategory;
import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.model.Launch_;
import com.example.lancamentoapi.model.Person;
import com.example.lancamentoapi.repository.LaunchRepository;
import com.example.lancamentoapi.repository.filter.LaunchFilter;
import com.example.lancamentoapi.repository.projection.LaunchSummary;
import com.example.lancamentoapi.service.exception.PersonInexistentOrInactiveException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LaunchService {

    private final LaunchRepository launchRepository;
    private PersonService personService;

    @Autowired
    public void setPersonService(PersonService personService) {
        this.personService = personService;
    }

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
        validatePerson(launch.getPerson());
        return launchRepository.save(launch);
    }

    public void delete(Long id) {
        launchRepository.deleteById(id);
    }

    public Page<LaunchSummary> sumUp(LaunchFilter launchFilter, Pageable pageable) {
        return launchRepository.sumUp(launchFilter, pageable);
    }

    public Launch update(Long id, Launch launch) {
        Launch launchBD = findExistentLaunch(id);

        if (!launch.getPerson().equals(launchBD.getPerson())){
            validatePerson(launch.getPerson());
        }

        BeanUtils.copyProperties(launch, launchBD, Launch_.ID);
        return launchRepository.save(launchBD);
    }

    private void validatePerson(Person person) {
        if (Optional.ofNullable(person).map(Person::getId).isPresent()){
            person = personService.findById(person.getId());
        }

        if (!Optional.ofNullable(person).isPresent() || person.isInactive()){
            throw new PersonInexistentOrInactiveException();
        }
    }

    private Launch findExistentLaunch(Long id) {
        Optional<Launch> launchBD = launchRepository.findById(id);

        if (!launchBD.isPresent()){
            throw new IllegalArgumentException();
        }else{
            return launchBD.get();
        }
    }

    @Transactional(readOnly = true)
    public boolean existsWithPersonId(Long id) {
        return launchRepository.existsByPersonId(id);
    }

    @Transactional(readOnly = true)
    public List<LaunchStatisticCategory> findByCategory(LocalDate date) {
        return launchRepository.findByCategory(date);
    }

    @Transactional(readOnly = true)
    public List<LaunchStatisticByDay> findByDay(LocalDate date) {
        return launchRepository.findByDay(date);
    }
}
