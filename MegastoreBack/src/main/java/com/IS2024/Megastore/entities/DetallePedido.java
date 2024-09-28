/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.IS2024.Megastore.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

/**
 *
 * @author maite
 */
@Entity
@Data
public class DetallePedido {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;
    private int cantidad;
    @ManyToOne
    @JoinColumn(name="id_producto", nullable=false)
    private Producto producto;
    private long precio; 
}
