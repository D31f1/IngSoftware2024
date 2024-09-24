package com.megastore.e_commerce.Service;

import org.springframework.stereotype.Service;
import com.megastore.e_commerce.DTO.CategoriaDTO;
import com.megastore.e_commerce.Mapper.CategoriaMapper;
import com.megastore.e_commerce.model.Categoria;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.megastore.e_commerce.Repository.CategoriaRepository;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

@Service
public class CategoriaService implements ICategoriaService {

    private static final Logger logger = LoggerFactory.getLogger(CategoriaService.class);

    @Autowired
    private CategoriaRepository categoriaRepository;

    private final CategoriaMapper categoriaMapper = new CategoriaMapper();

    @Override
    public List<CategoriaDTO> listar() {
        List<Categoria> categorias = categoriaRepository.findAll();
        return categorias.stream()
                .map(categoriaMapper::categoriaToCategoriaDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CategoriaDTO buscarPorId(Long id) {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        return categoria.map(categoriaMapper::categoriaToCategoriaDTO).orElse(null);
    }

    @Override
    public CategoriaDTO guardar(CategoriaDTO categoriaDTO) {
        Categoria categoria = categoriaMapper.categoriaDTOToCategoria(categoriaDTO);
        Categoria savedCategoria = categoriaRepository.save(categoria);
        return categoriaMapper.categoriaToCategoriaDTO(savedCategoria);
    }

    @Override
    public CategoriaDTO actualizar(CategoriaDTO categoriaDTO) {
        // Verificar si la categoría existe
        Optional<Categoria> categoriaExistente = categoriaRepository.findById(categoriaDTO.getId());
        if (categoriaExistente.isPresent()) {
            Categoria categoria = categoriaMapper.categoriaDTOToCategoria(categoriaDTO);
            Categoria updatedCategoria = categoriaRepository.save(categoria);
            return categoriaMapper.categoriaToCategoriaDTO(updatedCategoria);
        } else {
            // Si la categoría no existe
            logger.warn("Categoría con ID {} no encontrada para actualización", categoriaDTO.getId());
            return null;
        }
    }

    @Override
    public void eliminar(Long id) {
        categoriaRepository.deleteById(id);
    }
}