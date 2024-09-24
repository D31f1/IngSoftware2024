package com.megastore.e_commerce.Mapper;

import com.megastore.e_commerce.DTO.ProductoDTO;
import com.megastore.e_commerce.model.Producto;
import org.springframework.stereotype.Component;

public class ProductoMapper {

    public static ProductoDTO toDTO(Producto producto) {
        ProductoDTO dto = new ProductoDTO();
        dto.setId(producto.getId());
        dto.setNombre(producto.getNombre());
        dto.setCategoria(producto.getCategoria().getNombre());
        dto.setDescripcion(producto.getDescripcion());
        return dto;
    }

    public static Producto toEntity(ProductoDTO dto) {
        Producto producto = new Producto();
        producto.setId(dto.getId());
        producto.setNombre(dto.getNombre());
        producto.setPrecio(dto.getPrecio());
        producto.setDescripcion(dto.getDescripcion());
        // producto.setCategoria(categoria); // Aquí necesitarías buscar la categoría
        return producto;
    }
}