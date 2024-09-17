/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/SpringFramework/Repository.java to edit this template
 */
package com.IS2024.Megastore.repositories;

import org.springframework.data.repository.CrudRepository;
import com.IS2024.Megastore.entities.Usuario;

/**
 *
 * @author maite
 */
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    
}
