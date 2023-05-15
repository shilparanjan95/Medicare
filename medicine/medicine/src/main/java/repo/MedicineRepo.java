package repo;

import model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepo  extends JpaRepository<Medicine,Integer> {
}
