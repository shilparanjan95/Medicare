package com.medicare.medicine.service;


import com.medicare.medicine.model.Category;
import com.medicare.medicine.model.Movie;
import com.medicare.medicine.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.medicare.medicine.repo.CategoryRepo;
import com.medicare.medicine.repo.MovieRepo;
import com.medicare.medicine.repo.UserRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class MediService {

    @Autowired
    MovieRepo movieRepo;
    @Autowired
    UserRepo userRepo;
    @Autowired
    CategoryRepo categoryRepo;

   public Movie  addMedicine(Movie  medicine)
    {
        return movieRepo.save(medicine);
    }
    public Category addCategory(Category category)
    {
        return categoryRepo.save(category);
    }
    public User addUser(User user)
    {
        return userRepo.save(user);
    }



    public List<Movie> getMedicine()
    {  //to show only enable some where
        return movieRepo.findAll();
    }
    public void getMedicine(Integer id)
    {  //to show only enable some where
         movieRepo.deleteById(id);
    }
    public List<Category> getCategory()
    {
        return categoryRepo.findAll();
    }
    public List<User> getUsers()
    {
        return userRepo.findAll();
    }

    public String deleteMedicine(Integer id) {
       movieRepo.deleteById(id);
       return "Success";
    }


    //@Cacheable( key="#id")
    public Movie  getMedicineById(Integer id)
    {
        System.out.println("inside service call");
        return  this.movieRepo.findById(id).get();
    }
    public List<Movie> getByParam(String param)
    {
        List<Movie> medList = new ArrayList<>();
       List<Movie> ByNameMeds =  movieRepo.findByNameIgnoreCaseOrStarCastIgnoreCase(param,param);
       if(!ByNameMeds.isEmpty())
       {
           medList.addAll(ByNameMeds);
       }

       List<Category> categoryList = categoryRepo.findByNameIgnoreCase(param);
       if(!categoryList.isEmpty())
       {

           categoryList.stream().forEach(
                   category -> {
                   List<Movie>  medicines =  movieRepo.findByCategory(category);
                   if(!medicines.isEmpty())
                   {
                       medList.addAll(medicines) ;
                   }

                   }
           );

       }

        return medList;
    }

   public String updateMedicine(Integer id)
    {

        Movie  medicine= movieRepo.findById(id).get();
        medicine.setActivate(!medicine.isActivate());
        movieRepo.save(medicine);
        return "Success";
    }

}
