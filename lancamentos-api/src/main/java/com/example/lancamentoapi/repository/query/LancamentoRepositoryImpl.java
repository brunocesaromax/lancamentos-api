package com.example.lancamentoapi.repository.query;

import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.repository.filter.LancamentoFilter;
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

public class LancamentoRepositoryImpl implements LancamentoRepositoryQuery {

    @PersistenceContext
    private EntityManager manager;

    @Override
    public Page<Lancamento> filtrar(LancamentoFilter lancamentoFilter, Pageable pageable) {

        /*Utilizando criteria do JPA, do hibernate depreciou*/
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Lancamento> criteriaQuery = builder.createQuery(Lancamento.class);
        Root<Lancamento> root = criteriaQuery.from(Lancamento.class);

        /*restrições*/
        Predicate[] predicates = getRestricoes(lancamentoFilter, builder, root);
        criteriaQuery.where(predicates);

        TypedQuery<Lancamento> query = manager.createQuery(criteriaQuery);
        adicionarRestricoesPaginacao(query, pageable);

        return new PageImpl<>(query.getResultList(), pageable, total(lancamentoFilter));

    }

    private Predicate[] getRestricoes(LancamentoFilter lancamentoFilter, CriteriaBuilder builder, Root<Lancamento> root) {

        List<Predicate> predicates = new ArrayList<>();

        if (lancamentoFilter != null) {

            if (!StringUtils.isEmpty(lancamentoFilter.getDescricao())) {

                // where descricao like '%Ssga%'
                predicates.add(builder.like(
                        builder.lower(root.get("descricao")), "%" + lancamentoFilter.getDescricao().toLowerCase() + "%"));
            }

            if (lancamentoFilter.getDataVencimentoDe() != null) {
                predicates.add(
                        builder.greaterThanOrEqualTo(root.get("dataVencimento"), lancamentoFilter.getDataVencimentoDe()));
            }

            if (lancamentoFilter.getDataVencimentoAte() != null) {
                predicates.add(
                        builder.lessThanOrEqualTo(root.get("dataVencimento"), lancamentoFilter.getDataVencimentoAte()));
            }
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }

    private void adicionarRestricoesPaginacao(TypedQuery<Lancamento> query, Pageable pageable) {
        long paginaAtual = pageable.getPageNumber();
        long totalRegistrosPorPagina = pageable.getPageSize();
        long primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;

        query.setFirstResult(Math.toIntExact(primeiroRegistroDaPagina));
        query.setMaxResults(Math.toIntExact(totalRegistrosPorPagina));
    }

    private Long total(LancamentoFilter lancamentoFilter) {
        CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
        CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
        Root<Lancamento> root = criteriaQuery.from(Lancamento.class);

        Predicate[] predicates = getRestricoes(lancamentoFilter, criteriaBuilder, root);
        criteriaQuery.where(predicates);
        criteriaQuery.select(criteriaBuilder.count(root)); // SELECT COUNT(*)

        return manager.createQuery(criteriaQuery).getSingleResult();
    }


}
