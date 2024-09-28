/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/SpringFramework/Service.java to edit this template
 */
package com.IS2024.Megastore.services;

import com.IS2024.Megastore.Exceptions.InvalidEntityException;
import com.IS2024.Megastore.Exceptions.ResourceNotFoundException;
import com.IS2024.Megastore.entities.DetallePedido;
import com.IS2024.Megastore.entities.Pedido;
import com.IS2024.Megastore.repositories.PedidoRepository;
import jakarta.transaction.Transactional;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author maite
 */
@Service
public class PedidoService {
    @Autowired
    private PedidoRepository repository;
    @Autowired
    private DetallePedidoService serviceDetalle;
    @Autowired
    private ProductoService serviceProducto;

    public Optional<Pedido> findById(Long id) {
        return this.repository.findById(id);
    }
    
    public Pedido getById(Long id) {
        return this.repository.getById(id);
    }
    
    public List<Pedido> findAll() {
        return this.repository.findAll();
    }
    
    public Pedido updatePedido(Long id, Pedido pedido){
        Optional<Pedido> existingPedido = this.repository.findById(id);
        if(existingPedido.isPresent()){
            Pedido updatedPedido = existingPedido.get();
            //setAtributos
            
            //PRECIO
            updatedPedido.setPrecio(this.calcularTotalPedido(pedido));
            
            return this.repository.save(updatedPedido);
        } else {
            throw new ResourceNotFoundException("Pedido no encontrado con id: " + id);
        }
    }
    
    @Transactional
    public Pedido createPedido(Pedido pedido){
        //FECHA
        LocalDate localDate = LocalDate.now();
        Date sqlDate = Date.valueOf(localDate);
        pedido.setFechaPedido(sqlDate);
        
        //Precio de detalles
        for(DetallePedido dp : pedido.getDetallesPedido()){
            if(this.serviceProducto.tieneStock(dp.getProducto().getId(), dp.getCantidad())){
                dp.setPrecio(this.serviceDetalle.setTotal(dp));
                //Actualizar stock de producto
                this.serviceProducto.actualizarStock(dp.getProducto().getId(),dp.getCantidad());
            } else {
                throw new InvalidEntityException("NO HAY STOCK");
            }
        }
        
        //PRECIO
        pedido.setPrecio(this.calcularTotalPedido(pedido));
        
        return this.repository.save(pedido);
    }
    
    public long calcularTotalPedido(Pedido pedido) {
        long total = 0;
        
        for (DetallePedido detalle : pedido.getDetallesPedido()) {
            total += detalle.getPrecio();  
        }
        
        return total;
    }

    public void deleteById(Long id) {
        if(this.repository.existsById(id)){
            this.repository.deleteById(id);
        }else {
            throw new ResourceNotFoundException("Pedido no encontrado con id: " + id);
        }
    }
}
