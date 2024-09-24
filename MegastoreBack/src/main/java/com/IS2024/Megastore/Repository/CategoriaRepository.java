package com.megastore.e_commerce.Repository;

import com.megastore.e_commerce.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface CategoriaRepository extends JpaRepository  <Categoria,Long>{

    Optional<Categoria> findById(Long id);
    List<Categoria> findByNombre(String nombre);
}
