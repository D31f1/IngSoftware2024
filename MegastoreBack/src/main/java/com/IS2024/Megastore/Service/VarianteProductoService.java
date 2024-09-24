package com.megastore.e_commerce.Service;

import org.springframework.stereotype.Service;
import com.megastore.e_commerce.DTO.VarianteProductoDTO;
import com.megastore.e_commerce.Mapper.VarianteProductoMapper;
import com.megastore.e_commerce.model.VarianteProducto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.megastore.e_commerce.Repository.VarianteProductoRepository;

import java.util.List;

@Service
public class VarianteProductoService implements IVarianteProductoService {

    private static final Logger logger = LoggerFactory.getLogger(VarianteProductoService.class);

    @Autowired
    private VarianteProductoRepository varianteProductoRepository;

    @Override
    public List<VarianteProductoDTO> listar() {
        List<VarianteProducto> variantes = varianteProductoRepository.findAll();
        return variantes.stream().map(VarianteProductoMapper::toDTO).toList();
    }

    @Override
    public VarianteProducto buscarPorId(Long id) {
        return varianteProductoRepository.findById(id).orElse(null);
    }

    @Override
    public VarianteProductoDTO guardar(VarianteProductoDTO varianteDTO) {
        VarianteProducto variante = VarianteProductoMapper.toEntity(varianteDTO);
        return VarianteProductoMapper.toDTO(varianteProductoRepository.save(variante));
    }

    @Override
    public VarianteProducto guardar(VarianteProducto variante) {
        return varianteProductoRepository.save(variante);
    }

    @Override
    public void eliminar(VarianteProducto variante) {
        varianteProductoRepository.delete(variante);
    }
}
