package com.megastore.e_commerce.Service;

import com.megastore.e_commerce.DTO.EstadoDTO;
import com.megastore.e_commerce.model.Estado;

import java.util.List;

public interface IEstadoService {

    public List<EstadoDTO> listar();

    public Estado buscarPorId(Integer id);

    public EstadoDTO guardar(EstadoDTO estadoDTO);

    public Estado guardar(Estado estado);

    public void eliminar(Estado estado);
}
