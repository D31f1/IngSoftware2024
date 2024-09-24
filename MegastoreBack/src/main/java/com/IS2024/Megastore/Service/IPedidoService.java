package com.megastore.e_commerce.Service;

import com.megastore.e_commerce.DTO.PedidoDTO;
import com.megastore.e_commerce.model.Pedido;

import java.util.List;

public interface IPedidoService {

    public List<PedidoDTO> listar();

    public Pedido buscarPorId(Integer id);

    public PedidoDTO guardar(PedidoDTO pedidoDTO);

    public Pedido guardar(Pedido pedido);

    public void eliminar(Pedido pedido);
}