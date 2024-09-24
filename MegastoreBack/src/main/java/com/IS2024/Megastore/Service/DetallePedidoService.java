package com.megastore.e_commerce.Service;

import org.springframework.stereotype.Service;
import com.megastore.e_commerce.DTO.DetallePedidoDTO;
import com.megastore.e_commerce.Mapper.DetallePedidoMapper;
import com.megastore.e_commerce.model.DetallePedido;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.megastore.e_commerce.Repository.DetallePedidoRepository;

import java.util.List;

@Service
public class DetallePedidoService implements IDetallePedidoService {

    private static final Logger logger = LoggerFactory.getLogger(DetallePedidoService.class);

    @Autowired
    private DetallePedidoRepository detallePedidoRepository;

    @Override
    public List<DetallePedidoDTO> listar() {
        List<DetallePedido> detalles = detallePedidoRepository.findAll();
        return detalles.stream().map(DetallePedidoMapper::toDTO).toList();
    }

    @Override
    public DetallePedido buscarPorId(Integer id) {
        return detallePedidoRepository.findById(id).orElse(null);
    }

    @Override
    public DetallePedidoDTO guardar(DetallePedidoDTO detalleDTO) {
        DetallePedido detalle = DetallePedidoMapper.toEntity(detalleDTO);
        return DetallePedidoMapper.toDTO(detallePedidoRepository.save(detalle));
    }

    @Override
    public DetallePedido guardar(DetallePedido detalle) {
        return detallePedidoRepository.save(detalle);
    }

    @Override
    public void eliminar(DetallePedido detalle) {
        detallePedidoRepository.delete(detalle);
    }
}