package com.megastore.e_commerce.model;

import jakarta.persistence.*;

@Entity
public class DetallePedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Pedido pedido;

    @ManyToOne
    private Producto producto;

    private int cantidad;

    private double precioUnitario;

    // Getters y Setters

    private Double getPrecioUnitario();
}