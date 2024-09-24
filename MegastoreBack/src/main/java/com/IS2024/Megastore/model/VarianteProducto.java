package com.megastore.e_commerce.model;

import jakarta.persistence.*;

@Entity
public class VarianteProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Producto producto;

    private String opciones;

    // Getters y Setters
}
