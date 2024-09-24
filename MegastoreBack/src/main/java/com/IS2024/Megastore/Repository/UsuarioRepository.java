package com.megastore.e_commerce.Repository;

import com.megastore.e_commerce.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Listar todos los usuarios
    List<Usuario> findById();

    // Buscar usuario por su ID
    Optional<Usuario> findById(Long id);

    // Guardar usuario
    Usuario save(Usuario usuario);

    // Eliminar usuario
    void deleteById(Long id);

}
