package com.medicare.medicine.controller;

import com.medicare.medicine.model.Category;
import com.medicare.medicine.model.Movie;
import com.medicare.medicine.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.medicare.medicine.service.MediService;

import java.util.List;

@RestController
@RequestMapping("/movie")
@CrossOrigin(origins = "http://localhost:4200")
public class MedController {

    @Autowired
    MediService mediService;
    @PostMapping("/movie")
    public ResponseEntity<Movie> addMedicine(@RequestBody Movie movie)
    {
      return   ResponseEntity.ok(mediService.addMedicine(movie));
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


    @GetMapping("/movie")
    public List<Movie> listMedicine()
    {
        return   mediService.getMedicine();
    }
    @GetMapping("/movie/{id}")
    public Movie getMoview(@PathVariable("id") Integer id)
    {
        return   mediService.getMedicineById(id);
    }
    @DeleteMapping("/movie/{id}")
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

    @GetMapping("/search/{param}")
    public List<Movie> searchMedicine(@PathVariable("param") String param)
    {
        return mediService.getByParam(param);
    }


    @PutMapping("/movie/{id}")
    public String activateMedicine(@PathVariable("id") Integer id,@RequestBody Movie med)
    { return mediService.updateMedicine(id);
    }

}
