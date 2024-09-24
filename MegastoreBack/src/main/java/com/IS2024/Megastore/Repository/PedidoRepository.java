package com.megastore.e_commerce.Repository;

import com.megastore.e_commerce.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
