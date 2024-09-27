/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/SpringFramework/RestController.java to edit this template
 */
package com.IS2024.Megastore.controller;

import com.IS2024.Megastore.Exceptions.ResourceNotFoundException;
import com.IS2024.Megastore.services.TipoVarianteProductoService;
import com.IS2024.Megastore.entities.TipoVarianteProducto;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.http.HttpStatus;
/**
 *
 * @author maite
 */
@RestController
@RequestMapping("/tipoVarianteProducto")
public class TipoVarianteProductoRestController {
    
    @Autowired
    private TipoVarianteProductoService service;
    
    @GetMapping("/getAll")
    public List<TipoVarianteProducto> list() {
        return this.service.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        Optional<TipoVarianteProducto> tipoVarianteProducto = this.service.findById(id);
        if(tipoVarianteProducto.isPresent()){
            return new ResponseEntity<>(tipoVarianteProducto.get(),HttpStatus.OK);
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> put(@PathVariable Long id, @RequestBody TipoVarianteProducto input) {
        try {
            TipoVarianteProducto updatedTipoVarianteProducto = service.updateTipoVarianteProducto(id, input);
            return ResponseEntity.ok(updatedTipoVarianteProducto);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
    @PostMapping("/insert")
    public ResponseEntity<?> post(@RequestBody TipoVarianteProducto input) {
        TipoVarianteProducto createdTipoVarianteProducto = service.createTipoVarianteProducto(input);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTipoVarianteProducto);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
       try {
            service.deleteById(id);
            Optional<TipoVarianteProducto> tipoVarianteProducto = this.service.findById(id);
            if(!tipoVarianteProducto.isPresent()){
                return new ResponseEntity<>(HttpStatus.OK);
            } else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
}
