/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/SpringFramework/Service.java to edit this template
 */
package com.IS2024.Megastore.services;

import com.IS2024.Megastore.Exceptions.InvalidEntityException;
import com.IS2024.Megastore.Exceptions.ResourceNotFoundException;
import com.IS2024.Megastore.entities.Usuario;
import com.IS2024.Megastore.entities.Direccion;
import com.IS2024.Megastore.model.iniciarSesionRq;
import com.IS2024.Megastore.repositories.UsuarioRepository;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;

/**
 *
 * @author maite
 */
@Service
public class UsuarioService implements UsuarioRepository{
    
    
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private DireccionService direccionService;

    
    @Override
    public Optional<Usuario> findById(Long id) {
        return this.repository.findById(id);
    }
    
    @Override
    public Usuario getById(Long id) {
        return this.repository.getById(id);
    }
    
    @Override
    public List<Usuario> findAll() {
        return this.repository.findAll();
    }
    
    public Usuario updateUsuario(Long id, Usuario usuario){
        Optional<Usuario> existingUsuario = this.repository.findById(id);
        if(existingUsuario.isPresent()){
            Usuario updatedUsuario = existingUsuario.get();
            updatedUsuario.setNombre(usuario.getNombre());
            updatedUsuario.setApellido(usuario.getApellido());
            if(!usuario.getCorreo().isEmpty()){
                if(updatedUsuario.getCorreo() != usuario.getCorreo()){
                    //EL US ESTA MODIFICANDO EL CORREO
                    Optional<Usuario> existingUs = this.repository.findByCorreo(usuario.getCorreo()); 
                    if(existingUs.isPresent()){
                        throw new InvalidEntityException("Ya existe un usuario con el mismo correo");
                    } else{
                        updatedUsuario.setCorreo(usuario.getCorreo());
                    }
                }
            } else {
                throw new InvalidEntityException("El correo es un campo obligatorio");
            }
            updatedUsuario.setNroTelefono(usuario.getNroTelefono());
            updatedUsuario.setContrasenia(usuario.getContrasenia());
            for(Direccion d : usuario.getDirecciones()) { //iteramos por las direcciones que tenga el usuario a Actualizar
                if (d.getId() != null && d.getId() > 0) { //si la direccion tiene un id la actualizamos
                    this.direccionService.updateDireccion(d.getId(), d);
                } else {  //sino creamos una nueva direccion
                    this.direccionService.save(d);
                }

                //se verifica si la direccion esta o no en la lista de direcciones 
                if (!updatedUsuario.getDirecciones().contains(d)) {
                    updatedUsuario.getDirecciones().add(d); //si no esta la agregamos
                }
            }
            return this.repository.save(updatedUsuario);
        } else  {
            //return this.repository.save(usuario);
            throw new ResourceNotFoundException("Usuario no encontrado con id: " + id);
        }
    }
    
    public Usuario createUsuario(Usuario us){
        if(us.getCorreo() == null || "".equals(us.getCorreo()) || us.getCorreo().isEmpty()){
           throw new InvalidEntityException("El correo es un campo obligatorio.");
        } else {
           Optional<Usuario> existingUs = this.repository.findByCorreo(us.getCorreo()); 
           if(existingUs.isPresent()){
               throw new InvalidEntityException("Ya existe un usuario con el mismo correo");
           } else{
               return this.repository.save(us);
           }
        }
    }

    @Override
    public void deleteById(Long id) {
        if(this.repository.existsById(id)){
            this.repository.deleteById(id);
        }else {
            throw new ResourceNotFoundException("Usuario no encontrado con id: " + id);
        }
    }
    
    public Usuario iniciarSesion(iniciarSesionRq rq){
        Optional<Usuario> opUsuario = this.repository.findByCorreo(rq.getCorreo());
        if(opUsuario.isPresent()){
            Usuario us = opUsuario.get();
            if(rq.getContrasenia().equals(us.getContrasenia())){
                return us;
            } else {
                throw new ResourceNotFoundException("contraseña incorrecta");
            }
        } else{
            throw new ResourceNotFoundException("Usuario incorrecto ");
        }
    }
    
    //==============================================================
    
    @Override
    public void flush() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> S saveAndFlush(S entity) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> List<S> saveAllAndFlush(Iterable<S> entities) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void deleteAllInBatch(Iterable<Usuario> entities) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> ids) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void deleteAllInBatch() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Usuario getOne(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Usuario getReferenceById(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> List<S> findAll(Example<S> example) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> List<S> findAll(Example<S> example, Sort sort) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> List<S> saveAll(Iterable<S> entities) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public List<Usuario> findAllById(Iterable<Long> ids) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> S save(S entity) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean existsById(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public long count() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void delete(Usuario entity) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void deleteAllById(Iterable<? extends Long> ids) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void deleteAll(Iterable<? extends Usuario> entities) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void deleteAll() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public List<Usuario> findAll(Sort sort) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Page<Usuario> findAll(Pageable pageable) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> Optional<S> findOne(Example<S> example) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> Page<S> findAll(Example<S> example, Pageable pageable) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> long count(Example<S> example) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario> boolean exists(Example<S> example) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public <S extends Usuario, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Optional<Usuario> findByCorreo(String correo) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
}
