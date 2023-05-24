package com.medicare.medicine.repo;

import com.medicare.medicine.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
