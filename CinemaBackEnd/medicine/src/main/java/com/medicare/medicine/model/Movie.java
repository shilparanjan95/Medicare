package com.medicare.medicine.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String name;
    private String description;
    private String duration;
    private Integer quantity;
    private Integer qty;
    private Double price;
    @Column(columnDefinition =  "boolean default true ")
    private boolean activate;
    private String cast;
    @OneToOne
    @JoinColumn(columnDefinition = "category_Id")
    private Category category;

}
