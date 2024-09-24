package com.megastore.e_commerce.Service;

import com.megastore.e_commerce.DTO.CategoriaDTO;
import com.megastore.e_commerce.model.Categoria;

import java.util.List;

public interface ICategoriaService {

    public List<CategoriaDTO> listar();

    public CategoriaDTO buscarPorId(Long id);

    public CategoriaDTO guardar(CategoriaDTO categoriaDTO);

    //actualizar categoria
    public CategoriaDTO actualizar (CategoriaDTO categoriaDTO);

    public void eliminar(Long id);
}