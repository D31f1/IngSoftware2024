package com.megastore.e_commerce.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Usuario usuario;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
    private List<DetallePedido> detalles;

    private LocalDateTime fecha;

    @ManyToOne
    private Estado estado;

    // Getters y Setters
}
