package com.megastore.e_commerce.Service;

import com.megastore.e_commerce.DTO.VarianteProductoDTO;
import com.megastore.e_commerce.model.VarianteProducto;

import java.util.List;

public interface IVarianteProductoService {

    public List<VarianteProductoDTO> listar();

    public VarianteProducto buscarPorId(Integer id);

    public VarianteProductoDTO guardar(VarianteProductoDTO varianteDTO);

    public VarianteProducto guardar(VarianteProducto variante);

    public void eliminar(VarianteProducto variante);
}
