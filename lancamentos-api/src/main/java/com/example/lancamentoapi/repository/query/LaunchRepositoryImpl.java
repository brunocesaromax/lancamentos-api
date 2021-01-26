package com.example.lancamentoapi.repository.query;

import com.example.lancamentoapi.dto.LaunchStatisticByDay;
import com.example.lancamentoapi.dto.LaunchStatisticCategory;
import com.example.lancamentoapi.dto.LaunchStatisticPerson;
import com.example.lancamentoapi.model.Category_;
import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.model.Launch_;
import com.example.lancamentoapi.model.Person_;
import com.example.lancamentoapi.repository.filter.LaunchFilter;
import com.example.lancamentoapi.repository.projection.LaunchSummary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class LaunchRepositoryImpl implements LaunchRepositoryQuery {

    @PersistenceContext
    private EntityManager manager;

    @Override
    public Page<Launch> filterOut(LaunchFilter launchFilter, Pageable pageable) {

        /*Utilizando criteria do JPA, do hibernate depreciou*/
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Launch> criteriaQuery = builder.createQuery(Launch.class);
        Root<Launch> root = criteriaQuery.from(Launch.class);

        /*restrições*/
        Predicate[] predicates = getRestrictions(launchFilter, builder, root);
        criteriaQuery.where(predicates);

        TypedQuery<Launch> query = manager.createQuery(criteriaQuery);
        addRestrictionsInPagination(query, pageable);

        return new PageImpl<>(query.getResultList(), pageable, total(launchFilter));
    }

    @Override
    public Page<LaunchSummary> sumUp(LaunchFilter launchFilter, Pageable pageable) {

        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<LaunchSummary> criteriaQuery = builder.createQuery(LaunchSummary.class);
        Root<Launch> root = criteriaQuery.from(Launch.class);

        criteriaQuery.select(builder.construct(LaunchSummary.class,
                root.get(Launch_.ID),
                root.get(Launch_.DESCRIPTION),
                root.get(Launch_.DUE_DATE),
                root.get(Launch_.PAYDAY),
                root.get(Launch_.VALUE),
                root.get(Launch_.TYPE),
                root.get(Launch_.CATEGORY).get(Category_.NAME),
                root.get(Launch_.PERSON).get(Person_.NAME)));

        /*restrições*/
        Predicate[] predicates = getRestrictions(launchFilter, builder, root);
        criteriaQuery.where(predicates);

        TypedQuery<LaunchSummary> query = manager.createQuery(criteriaQuery);
        addRestrictionsInPagination(query, pageable);

        return new PageImpl<>(query.getResultList(), pageable, total(launchFilter));
    }

    @Override
    public List<LaunchStatisticCategory> findByCategory(LocalDate monthReference) {
        CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();

        CriteriaQuery<LaunchStatisticCategory> criteriaQuery = criteriaBuilder
                .createQuery(LaunchStatisticCategory.class);

        Root<Launch> root = criteriaQuery.from(Launch.class);

        criteriaQuery.select(criteriaBuilder.construct(LaunchStatisticCategory.class,
                root.get(Launch_.CATEGORY),
                criteriaBuilder.sum(root.get(Launch_.VALUE))));

        LocalDate firstDay = monthReference.withDayOfMonth(1);
        LocalDate lastDay = monthReference.withDayOfMonth(monthReference.lengthOfMonth());

        criteriaQuery.where(
                criteriaBuilder.greaterThanOrEqualTo(root.get(Launch_.DUE_DATE), firstDay),
                criteriaBuilder.lessThanOrEqualTo(root.get(Launch_.DUE_DATE), lastDay)
        );

        criteriaQuery.groupBy(root.get(Launch_.CATEGORY));

        TypedQuery<LaunchStatisticCategory> typedQuery = manager.createQuery(criteriaQuery);

        return typedQuery.getResultList();
    }

    @Override
    public List<LaunchStatisticByDay> findByDay(LocalDate monthReference) {
        CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();

        CriteriaQuery<LaunchStatisticByDay> criteriaQuery = criteriaBuilder
                .createQuery(LaunchStatisticByDay.class);

        Root<Launch> root = criteriaQuery.from(Launch.class);

        criteriaQuery.select(criteriaBuilder.construct(LaunchStatisticByDay.class,
                root.get(Launch_.TYPE),
                root.get(Launch_.DUE_DATE),
                criteriaBuilder.sum(root.get(Launch_.VALUE))));

        LocalDate firstDay = monthReference.withDayOfMonth(1);
        LocalDate lastDay = monthReference.withDayOfMonth(monthReference.lengthOfMonth());

        criteriaQuery.where(
                criteriaBuilder.greaterThanOrEqualTo(root.get(Launch_.DUE_DATE), firstDay),
                criteriaBuilder.lessThanOrEqualTo(root.get(Launch_.DUE_DATE), lastDay)
        );

        criteriaQuery.groupBy(root.get(Launch_.TYPE), root.get(Launch_.DUE_DATE));

        TypedQuery<LaunchStatisticByDay> typedQuery = manager.createQuery(criteriaQuery);

        return typedQuery.getResultList();
    }

    @Override
    public List<LaunchStatisticPerson> findByPerson(LocalDate start, LocalDate end) {
        CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();

        CriteriaQuery<LaunchStatisticPerson> criteriaQuery = criteriaBuilder
                .createQuery(LaunchStatisticPerson.class);

        Root<Launch> root = criteriaQuery.from(Launch.class);

        criteriaQuery.select(criteriaBuilder.construct(LaunchStatisticPerson.class,
                root.get(Launch_.TYPE),
                root.get(Launch_.PERSON),
                criteriaBuilder.sum(root.get(Launch_.VALUE))));

        criteriaQuery.where(
                criteriaBuilder.greaterThanOrEqualTo(root.get(Launch_.DUE_DATE), start),
                criteriaBuilder.lessThanOrEqualTo(root.get(Launch_.DUE_DATE), end)
        );

        criteriaQuery.groupBy(root.get(Launch_.TYPE), root.get(Launch_.PERSON));

        TypedQuery<LaunchStatisticPerson> typedQuery = manager.createQuery(criteriaQuery);

        return typedQuery.getResultList();
    }

    private Predicate[] getRestrictions(LaunchFilter launchFilter, CriteriaBuilder builder, Root<Launch> root) {

        List<Predicate> predicates = new ArrayList<>();

        if (launchFilter != null) {

            if (!StringUtils.isEmpty(launchFilter.getDescription())) {

                // where description like '%Ssga%'
                predicates.add(builder.like(
                        builder.lower(root.get(Launch_.DESCRIPTION)), "%" + launchFilter.getDescription().toLowerCase() + "%"));
            }

            if (launchFilter.getDueDayStart() != null) {
                predicates.add(
                        builder.greaterThanOrEqualTo(root.get(Launch_.DUE_DATE), launchFilter.getDueDayStart()));
            }

            if (launchFilter.getDueDayEnd() != null) {
                predicates.add(
                        builder.lessThanOrEqualTo(root.get(Launch_.DUE_DATE), launchFilter.getDueDayEnd()));
            }
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }

    private void addRestrictionsInPagination(TypedQuery<?> query, Pageable pageable) {
        long paginaAtual = pageable.getPageNumber();
        long totalRegistrosPorPagina = pageable.getPageSize();
        long primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;

        query.setFirstResult(Math.toIntExact(primeiroRegistroDaPagina));
        query.setMaxResults(Math.toIntExact(totalRegistrosPorPagina));
    }

    private Long total(LaunchFilter launchFilter) {
        CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
        CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
        Root<Launch> root = criteriaQuery.from(Launch.class);

        Predicate[] predicates = getRestrictions(launchFilter, criteriaBuilder, root);
        criteriaQuery.where(predicates);
        criteriaQuery.select(criteriaBuilder.count(root)); // SELECT COUNT(*)

        return manager.createQuery(criteriaQuery).getSingleResult();
    }


}
