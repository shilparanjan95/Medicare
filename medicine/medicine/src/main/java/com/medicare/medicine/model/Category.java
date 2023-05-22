package com.medicare.medicine.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "Category")
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String categoryId;

    private String name;
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List<Medicine> medicine;
}
