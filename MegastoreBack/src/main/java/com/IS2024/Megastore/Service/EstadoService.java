package com.megastore.e_commerce.Service;

import org.springframework.stereotype.Service;
import com.megastore.e_commerce.DTO.EstadoDTO;
import com.megastore.e_commerce.Mapper.EstadoMapper;
import com.megastore.e_commerce.model.Estado;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.megastore.e_commerce.Repository.EstadoRepository;

import java.util.List;

@Service
public class EstadoService implements IEstadoService {

    private static final Logger logger = LoggerFactory.getLogger(EstadoService.class);

    @Autowired
    private EstadoRepository estadoRepository;

    @Override
    public List<EstadoDTO> listar() {
        List<Estado> estados = estadoRepository.findAll();
        return estados.stream().map(EstadoMapper::toDTO).toList();
    }

    @Override
    public Estado buscarPorId(Integer id) {
        return estadoRepository.findById(id).orElse(null);
    }

    @Override
    public EstadoDTO guardar(EstadoDTO estadoDTO) {
        Estado estado = EstadoMapper.toEntity(estadoDTO);
        return EstadoMapper.toDTO(estadoRepository.save(estado));
    }

    @Override
    public Estado guardar(Estado estado) {
        return estadoRepository.save(estado);
    }

    @Override
    public void eliminar(Estado estado) {
        estadoRepository.delete(estado);
    }
}
