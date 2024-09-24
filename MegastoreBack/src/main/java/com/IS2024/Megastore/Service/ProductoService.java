package com.megastore.e_commerce.Service;

import org.springframework.stereotype.Service;
import com.megastore.e_commerce.DTO.ProductoDTO;
import com.megastore.e_commerce.Mapper.ProductoMapper;
import com.megastore.e_commerce.model.Producto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.megastore.e_commerce.Repository.ProductoRepository;

import java.util.List;

@Service
public class ProductoService implements IProductoService {
    private static final Logger logger = LoggerFactory.getLogger(ProductoService.class);

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public List<ProductoDTO> listar() {
        List<Producto> productos = productoRepository.findAll();
        return productos.stream().map(ProductoMapper::toDTO).toList();
    }

    @Override
    public Producto buscarPorId(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    @Override
    public ProductoDTO guardar(ProductoDTO productoDTO) {
        Producto producto = ProductoMapper.toEntity(productoDTO);
        return ProductoMapper.toDTO(productoRepository.save(producto));
    }

    @Override
    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public void eliminar(Producto producto) {
        producto.setEliminado(true);
        productoRepository.save(producto);
    }
}
