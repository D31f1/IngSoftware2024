package com.megastore.e_commerce.Service;

import org.springframework.stereotype.Service;
import com.megastore.e_commerce.DTO.RolDTO;
import com.megastore.e_commerce.Mapper.RolMapper;
import com.megastore.e_commerce.model.Rol;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.megastore.e_commerce.Repository.RolRepository;

import java.util.List;

@Service
public class RolService implements IRolService {

    private static final Logger logger = LoggerFactory.getLogger(RolService.class);

    @Autowired
    private RolRepository rolRepository;

    @Override
    public List<RolDTO> listar() {
        List<Rol> roles = rolRepository.findAll();
        return roles.stream().map(RolMapper::toDTO).toList();
    }

    @Override
    public Rol buscarPorId(Integer id) {
        return rolRepository.findById(id).orElse(null);
    }

    @Override
    public RolDTO guardar(RolDTO rolDTO) {
        Rol rol = RolMapper.toEntity(rolDTO);
        return RolMapper.toDTO(rolRepository.save(rol));
    }

    @Override
    public Rol guardar(Rol rol) {
        return rolRepository.save(rol);
    }

    @Override
    public void eliminar(Rol rol) {
        rolRepository.delete(rol);
    }
}