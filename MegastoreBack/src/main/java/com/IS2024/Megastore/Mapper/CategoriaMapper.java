package com.megastore.e_commerce.Mapper;

import com.megastore.e_commerce.model.Categoria;
import com.megastore.e_commerce.DTO.CategoriaDTO;


public class CategoriaMapper {

    // Convertir de Categoria a CategoriaDTO
    public CategoriaDTO categoriaToCategoriaDTO(Categoria categoria) {
        if (categoria == null) {
            return null;
        }
        CategoriaDTO dto = new CategoriaDTO();
        dto.setId(categoria.getId());
        dto.setNombre(categoria.getNombre());
        dto.setDescripcion(categoria.getDescripcion());
        return dto;
    }

    // Convertir de CategoriaDTO a Categoria
    public Categoria categoriaDTOToCategoria(CategoriaDTO categoriaDTO) {
        if (categoriaDTO == null) {
            return null;
        }
        Categoria categoria = new Categoria();
        categoria.setId(categoriaDTO.getId());
        categoria.setNombre(categoriaDTO.getNombre());
        categoria.setDescripcion(categoriaDTO.getDescripcion());
        return categoria;
    }
}
