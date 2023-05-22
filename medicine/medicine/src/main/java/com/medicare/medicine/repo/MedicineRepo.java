package com.medicare.medicine.repo;

import com.medicare.medicine.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepo  extends JpaRepository<Medicine,Integer> {
}
