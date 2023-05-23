package com.medicare.medicine.repo;

import com.medicare.medicine.model.Category;
import com.medicare.medicine.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicineRepo  extends JpaRepository<Medicine,Integer> {

   List<Medicine> findByNameIgnoreCaseOrBrandIgnoreCase(String name, String brand );

   List<Medicine> findByCategory(Category category);
}
