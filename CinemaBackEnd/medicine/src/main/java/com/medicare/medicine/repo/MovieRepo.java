package com.medicare.medicine.repo;

import com.medicare.medicine.model.Category;
import com.medicare.medicine.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepo extends JpaRepository<Movie,Integer> {

   List<Movie> findByNameIgnoreCaseOrCastIgnoreCase(String name, String brand );

   List<Movie> findByCategory(Category category);
}
