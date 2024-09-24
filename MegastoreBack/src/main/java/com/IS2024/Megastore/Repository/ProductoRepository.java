package com.megastore.e_commerce.Repository;

import com.megastore.e_commerce.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
