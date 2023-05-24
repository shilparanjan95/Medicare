package com.medicare.medicine.repo;

import com.medicare.medicine.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepo  extends JpaRepository<Category,String> {

    List<Category> findByNameIgnoreCase(String name);
}
