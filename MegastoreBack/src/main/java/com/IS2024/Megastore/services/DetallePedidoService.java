/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/SpringFramework/Service.java to edit this template
 */
package com.IS2024.Megastore.services;

import com.IS2024.Megastore.Exceptions.ResourceNotFoundException;
import com.IS2024.Megastore.entities.DetallePedido;
import com.IS2024.Megastore.entities.Producto;
import com.IS2024.Megastore.repositories.DetallePedidoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author maite
 */
@Service
public class DetallePedidoService {
    @Autowired
    private DetallePedidoRepository repository;
    
    @Autowired
    private ProductoService productoService;

    
    public Optional<DetallePedido> findById(Long id) {
        return this.repository.findById(id);
    }
    
    public DetallePedido getById(Long id) { 
        return this.repository.getById(id);
    }
    
    public List<DetallePedido> findAll() {
        return this.repository.findAll();
    }
    
    public DetallePedido updateDetallePedido(Long id, DetallePedido detalle){
        Optional<DetallePedido> existingDetalle = this.repository.findById(id);
        if(existingDetalle.isPresent()){
            DetallePedido updatedDetalle = existingDetalle.get();
            
            updatedDetalle.setCantidad(detalle.getCantidad());
            
            //control que producto exista y que tenga stock
            Optional<Producto> producto = this.productoService.findById(detalle.getProducto().getId());
            if(producto.isPresent()){
                Producto p = producto.get();
                if(this.productoService.tieneStock(p.getId(), detalle.getCantidad())){
                    updatedDetalle.setProducto(producto.get());
                    //Actualizar el stock del producto
                    this.productoService.actualizarStock(p.getId(), detalle.getCantidad());
                }
            }else{
                throw new ResourceNotFoundException("Producto no encontrado con id: " + detalle.getProducto().getId());
            }
            
            //calcular precio del detalle
            long precioDetalle = updatedDetalle.getProducto().getPrecio() * updatedDetalle.getCantidad();
            updatedDetalle.setPrecio(precioDetalle);
            
            return this.repository.save(updatedDetalle);
        } else {
            throw new ResourceNotFoundException("DetallePedido no encontrado con id: " + id);
        }
    }
    
    public DetallePedido createDetallePedido(DetallePedido detalle){
        return this.repository.save(detalle);
    }
    
    public long setTotal(DetallePedido dp){
        //control que producto exista y tenga stock
        Optional<Producto> producto = this.productoService.findById(dp.getProducto().getId());
        if(producto.isPresent()){
            Producto p = producto.get();
            return ( p.getPrecio() * dp.getCantidad());
        }else{
            throw new ResourceNotFoundException("Producto no encontrado con id: " + dp.getProducto().getId());
        }
    }

    public void deleteById(Long id) {
        if(this.repository.existsById(id)){
            this.repository.deleteById(id);
        }else {
            throw new ResourceNotFoundException("DetallePedido no encontrado con id: " + id);
        }
    }
}
