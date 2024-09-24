package com.megastore.e_commerce.Service;

import com.megastore.e_commerce.DTO.UsuarioDTO;
import com.megastore.e_commerce.model.Usuario;

import java.util.List;

public interface IUsuarioService {

    public List<UsuarioDTO> listar();

    public Usuario buscarPorId(Integer id);

    public UsuarioDTO guardar(UsuarioDTO usuarioDTO);

    public Usuario guardar(Usuario usuario);

    public void eliminar(Usuario usuario);
}
