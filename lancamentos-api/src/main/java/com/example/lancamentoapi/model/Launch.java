package com.example.lancamentoapi.model;

import com.example.lancamentoapi.repository.listener.LaunchAttachmentListener;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;


//Quando um objeto Launch for carregado do banco o listener será ativado
@EntityListeners(LaunchAttachmentListener.class)
@Entity
@Table(name = "launch")
@Data
public class Launch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String description;

    @NotNull
    @Column(name = "due_date")
    private LocalDate dueDate;

    @Column(name = "payday")
    private LocalDate payday;

    @NotNull
    private BigDecimal value;

    private String observation;

    @NotNull
    @Enumerated(EnumType.STRING) // Melhor para consultas escritas a mao
    private TypeLaunch type;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    //Não é necessários buscar os contatos de uma pessoa pela busca de lançamentos
    @JsonIgnoreProperties(Person_.CONTACTS)
    @NotNull
    @ManyToOne
    @JoinColumn(name = "person_id")
    private Person person;

    private String attachment;

    @Transient
    private String urlAttachment;

    @JsonIgnore
    public boolean isRecipe(){
        return this.type.equals(TypeLaunch.RECIPE);
    }
}
