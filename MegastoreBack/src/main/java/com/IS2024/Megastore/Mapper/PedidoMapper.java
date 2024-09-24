package com.megastore.e_commerce.Mapper;

import com.megastore.e_commerce.DTO.PedidoDTO;
import com.megastore.e_commerce.model.Pedido;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;


public class PedidoMapper {

    public static PedidoDTO toDTO(Pedido pedido) {
        PedidoDTO dto = new PedidoDTO();
        dto.setId(pedido.getId());
        dto.setUsuarioId(pedido.getUsuario().getId());
        dto.setEstado(pedido.getEstado().getNombre());  // Asumiendo que estado es otra entidad
        dto.setDetalles(pedido.getDetalles().stream().map(DetallePedidoMapper::toDTO).collect(Collectors.toList()));
        return dto;
    }

    public static Pedido toEntity(PedidoDTO dto) {
        Pedido pedido = new Pedido();
        pedido.setId(dto.getId());
        // pedido.setUsuario(usuario); //  buscar el usuario en la base de datos
        pedido.setEstado(dto.getEstado()); // Asumiendo que estado es un enum o entidad
        return pedido;
    }
}
