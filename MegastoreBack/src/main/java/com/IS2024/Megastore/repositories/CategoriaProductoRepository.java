/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/SpringFramework/Repository.java to edit this template
 */
package com.IS2024.Megastore.repositories;

import com.IS2024.Megastore.entities.CategoriaProducto;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 *
 * @author maite
 */
public interface CategoriaProductoRepository extends JpaRepository<CategoriaProducto, Long> {
    
}