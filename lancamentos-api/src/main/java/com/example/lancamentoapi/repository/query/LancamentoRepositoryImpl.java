package com.example.lancamentoapi.repository.query;

import com.example.lancamentoapi.model.Lancamento;
import com.example.lancamentoapi.repository.filter.LancamentoFilter;
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
    public List<Lancamento> filtrar(LancamentoFilter lancamentoFilter) {

        /*Utilizando criteria do JPA, do hibernate depreciou*/
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Lancamento> criteriaQuery = builder.createQuery(Lancamento.class);
        Root<Lancamento> root = criteriaQuery.from(Lancamento.class);

        /*restrições*/
        Predicate[] predicates = getRestricoes(lancamentoFilter, builder, root);
        criteriaQuery.where(predicates);

        TypedQuery<Lancamento> query = manager.createQuery(criteriaQuery);
        return query.getResultList();

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
}
