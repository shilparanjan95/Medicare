package com.medicare.medicine.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String name;
    private String brand;
    private Integer quantity;
    private Double price;
    @Column(columnDefinition = "boolean default true")
    private boolean activate;
    private String description;
    @OneToOne
    @JoinColumn(columnDefinition = "category_Id")
    private Category category;

}
