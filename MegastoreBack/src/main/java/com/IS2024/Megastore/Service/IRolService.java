package com.megastore.e_commerce.Service;

import com.megastore.e_commerce.DTO.RolDTO;
import com.megastore.e_commerce.model.Rol;

import java.util.List;

public interface IRolService {

    public List<RolDTO> listar();

    public Rol buscarPorId(Integer id);

    public RolDTO guardar(RolDTO rolDTO);

    public Rol guardar(Rol rol);

    public void eliminar(Rol rol);
}
