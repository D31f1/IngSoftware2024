/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.IS2024.Megastore.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

/**
 *
 * @author maite
 */
@Data
@Entity
public class CategoriaProducto {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long id;
    private String nombre;
    private String descripcion;
}
