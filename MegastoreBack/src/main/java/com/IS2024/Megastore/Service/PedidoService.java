package com.megastore.e_commerce.Service;

import org.springframework.stereotype.Service;
import com.megastore.e_commerce.DTO.PedidoDTO;
import com.megastore.e_commerce.Mapper.PedidoMapper;
import com.megastore.e_commerce.model.Pedido;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.megastore.e_commerce.Repository.PedidoRepository;

import java.util.List;

@Service
public class PedidoService implements IPedidoService {

    private static final Logger logger = LoggerFactory.getLogger(PedidoService.class);

    @Autowired
    private PedidoRepository pedidoRepository;

    @Override
    public List<PedidoDTO> listar() {
        List<Pedido> pedidos = pedidoRepository.findAll();
        return pedidos.stream().map(PedidoMapper::toDTO).toList();
    }

    @Override
    public Pedido buscarPorId(Long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    @Override
    public PedidoDTO guardar(PedidoDTO pedidoDTO) {
        Pedido pedido = PedidoMapper.toEntity(pedidoDTO);
        return PedidoMapper.toDTO(pedidoRepository.save(pedido));
    }

    @Override
    public Pedido guardar(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    public void eliminar(Pedido pedido) {
        pedido.setEstadoCancelado();
        pedidoRepository.save(pedido);
    }
}
