/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/SpringFramework/RestController.java to edit this template
 */
package com.IS2024.Megastore.controller;

import com.IS2024.Megastore.Exceptions.ResourceNotFoundException;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

/**
 *
 * @author maite
 */

import com.IS2024.Megastore.entities.Rol;
import com.IS2024.Megastore.services.RolService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/rol")
public class RolRestController {

    @Autowired
    private RolService service;

    @GetMapping("/getAll")
    public List<Rol> list() {
        return this.service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        Optional<Rol> rol = this.service.findById(id);
        if(rol.isPresent()){
            return new ResponseEntity<>(rol.get(),HttpStatus.OK);
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> put(@PathVariable Long id, @RequestBody Rol input) {
        try {
            Rol updatedRol = service.update(id, input);
            return ResponseEntity.ok(updatedRol);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PostMapping("/insert")
    public ResponseEntity<?> post(@RequestBody Rol input) {
        Rol createdRol = service.save(input);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRol);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            service.delete(id);
            Optional<Rol> rol = this.service.findById(id);
            if(!rol.isPresent()){
                return new ResponseEntity<>(HttpStatus.OK);
            } else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
