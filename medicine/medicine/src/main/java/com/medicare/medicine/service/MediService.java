package com.medicare.medicine.service;


import com.medicare.medicine.model.Category;
import com.medicare.medicine.model.Medicine;
import com.medicare.medicine.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.medicare.medicine.repo.CategoryRepo;
import com.medicare.medicine.repo.MedicineRepo;
import com.medicare.medicine.repo.UserRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class MediService {

    @Autowired
    MedicineRepo medicineRepo;
    @Autowired
    UserRepo userRepo;
    @Autowired
    CategoryRepo categoryRepo;

   public Medicine addMedicine(Medicine medicine)
    {
        return medicineRepo.save(medicine);
    }
    public Category addCategory(Category category)
    {
        return categoryRepo.save(category);
    }
    public User addUser(User user)
    {
        return userRepo.save(user);
    }

    public List<Medicine> getMedicine()
    {  //to show only enable some where
        return medicineRepo.findAll();
    }
    public void getMedicine(Integer id)
    {  //to show only enable some where
         medicineRepo.deleteById(id);
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
       medicineRepo.deleteById(id);
       return "Success";
    }

    public Medicine getMedicineById(Integer id)
    {
        return  this.medicineRepo.findById(id).get();
    }
    public List<Medicine> getByParam(String param)
    {
        List<Medicine> medList = new ArrayList<>();
       List<Medicine> ByNameMeds =  medicineRepo.findByNameIgnoreCaseOrBrandIgnoreCase(param,param);
       if(!ByNameMeds.isEmpty())
       {
           medList.addAll(ByNameMeds);
       }

       List<Category> categoryList = categoryRepo.findByNameIgnoreCase(param);
       if(!categoryList.isEmpty())
       {

           categoryList.stream().forEach(
                   category -> {
                   List<Medicine>  medicines =  medicineRepo.findByCategory(category);
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

        Medicine medicine= medicineRepo.findById(id).get();
        medicine.setActivate(!medicine.isActivate());
        medicineRepo.save(medicine);
        return "Success";
    }

}
