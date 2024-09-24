package com.megastore.e_commerce.Service;

import com.megastore.e_commerce.DTO.DetallePedidoDTO;
import com.megastore.e_commerce.model.DetallePedido;

import java.util.List;

public interface IDetallePedidoService {

    public List<DetallePedidoDTO> listar();

    public DetallePedido buscarPorId(Integer id);

    public DetallePedidoDTO guardar(DetallePedidoDTO detalleDTO);

    public DetallePedido guardar(DetallePedido detalle);

    public void eliminar(DetallePedido detalle);
}
