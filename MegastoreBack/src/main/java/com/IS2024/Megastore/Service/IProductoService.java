package com.megastore.e_commerce.Service;

import com.megastore.e_commerce.DTO.ProductoDTO;
import com.megastore.e_commerce.model.Producto;

import java.util.List;

public interface IProductoService {

    public List<ProductoDTO> listar();

    public Producto buscarPorId(Integer id);

    public ProductoDTO guardar(ProductoDTO productoDTO);

    public Producto guardar(Producto producto);

    public void eliminar(Producto producto);
}
