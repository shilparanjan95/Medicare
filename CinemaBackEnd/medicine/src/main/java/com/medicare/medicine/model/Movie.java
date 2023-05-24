package com.medicare.medicine.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="Movie_Data")
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
    @Column(columnDefinition =  "boolean default true")
    private boolean activate;
    private String starCast;
    @OneToOne
    @JoinColumn(columnDefinition = "category_Id")
    private Category category;

}
