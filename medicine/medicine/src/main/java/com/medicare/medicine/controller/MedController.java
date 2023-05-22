package com.medicare.medicine.controller;

import com.medicare.medicine.model.Category;
import com.medicare.medicine.model.Medicine;
import com.medicare.medicine.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.medicare.medicine.service.MediService;

import java.util.List;

@RestController
@RequestMapping("/medicine")
@CrossOrigin(origins = "http://localhost:4200")
public class MedController {

    @Autowired
    MediService mediService;
    @PostMapping("/medicine")
    public ResponseEntity<Medicine> addMedicine(@RequestBody Medicine medicine)
    {
      return   ResponseEntity.ok(mediService.addMedicine(medicine));
    }
    @PostMapping("/user")
    public ResponseEntity<User> addUser(@RequestBody User user)
    {
        return   ResponseEntity.ok(mediService.addUser(user));
    }

    @PostMapping("/category")
    public ResponseEntity<Category> addCategory(@RequestBody Category category)
    {
        return   ResponseEntity.ok(mediService.addCategory(category));
    }


    @GetMapping("/medicine")
    public List<Medicine> listMedicine()
    {
        return   mediService.getMedicine();
    }
    @GetMapping("/medicine/{id}")
    public Medicine getMedicine(@PathVariable("id") Integer id)
    {
        return   mediService.getMedicineById(id);
    }
    @DeleteMapping("/medicine/{id}")
    public String removeMedicine(@PathVariable("id") Integer id) { return mediService.deleteMedicine(id);
    }

    @GetMapping("/user")
    public List<User> listUsers()
    {
        return   mediService.getUsers();
    }
    @GetMapping("/category")
    public List<Category> getCategory()
    {
        return   mediService.getCategory();
    }


}
