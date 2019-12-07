package com.example.lancamentoapi.repository.query;

import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.repository.filter.LaunchFilter;
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

    private Predicate[] getRestrictions(LaunchFilter launchFilter, CriteriaBuilder builder, Root<Launch> root) {

        List<Predicate> predicates = new ArrayList<>();

        if (launchFilter != null) {

            if (!StringUtils.isEmpty(launchFilter.getDescription())) {

                // where description like '%Ssga%'
                predicates.add(builder.like(
                        builder.lower(root.get("description")), "%" + launchFilter.getDescription().toLowerCase() + "%"));
            }

            if (launchFilter.getDueDayStart() != null) {
                predicates.add(
                        builder.greaterThanOrEqualTo(root.get("dueDate"), launchFilter.getDueDayStart()));
            }

            if (launchFilter.getDueDayEnd() != null) {
                predicates.add(
                        builder.lessThanOrEqualTo(root.get("dueDate"), launchFilter.getDueDayEnd()));
            }
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }

    private void addRestrictionsInPagination(TypedQuery<Launch> query, Pageable pageable) {
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
