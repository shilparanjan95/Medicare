package model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Category")
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String categoryId;

    private String name;
    @OneToOne(mappedBy = "category")
    private Medicine medicine;
}
