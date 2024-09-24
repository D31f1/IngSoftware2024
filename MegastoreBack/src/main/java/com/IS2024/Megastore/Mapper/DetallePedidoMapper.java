package com.megastore.e_commerce.Mapper;

import com.megastore.e_commerce.DTO.DetallePedidoDTO;
import com.megastore.e_commerce.model.DetallePedido;

public class DetallePedidoMapper {

    public static DetallePedidoDTO toDTO(DetallePedido detalle) {
        DetallePedidoDTO dto = new DetallePedidoDTO();
        dto.setId(detalle.getId());
        dto.setProductoId(detalle.getProducto().getId());
        dto.setCantidad(detalle.getCantidad());
        dto.setPrecioUnitario(detalle.getPrecioUnitario());
        return dto;
    }

    public static DetallePedido toEntity(DetallePedidoDTO dto) {
        DetallePedido detalle = new DetallePedido();
        detalle.setId(dto.getId());
        detalle.setCantidad(dto.getCantidad());
        detalle.setPrecioUnitario(dto.getPrecioUnitario());
        // detalle.setProducto(producto);
        return detalle;
    }
}