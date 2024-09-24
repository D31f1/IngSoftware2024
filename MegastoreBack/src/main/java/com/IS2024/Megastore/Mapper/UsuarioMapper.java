package com.megastore.e_commerce.Mapper;

import com.megastore.e_commerce.DTO.UsuarioDTO;
import com.megastore.e_commerce.model.Usuario;

public class UsuarioMapper {

    public static UsuarioDTO toDTO(Usuario usuario) {
        UsuarioDTO dto = new UsuarioDTO();
        dto.setId(usuario.getId());
        dto.setNombre(usuario.getNombre());
        dto.setEmail(usuario.getEmail());
        dto.setRol(usuario.getRol().getNombre()); // Asumiendo que el rol es otra entidad
        return dto;
    }

    public static Usuario toEntity(UsuarioDTO dto) {
        Usuario usuario = new Usuario();
        usuario.setId(dto.getId());
        usuario.setNombre(dto.getNombre());
        usuario.setEmail(dto.getEmail());
        // usuario.setRol(rol); // Aquí necesitarías buscar el rol en la base de datos
        return usuario;
    }

}
