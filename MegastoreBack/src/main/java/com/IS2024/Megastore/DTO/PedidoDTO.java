package com.megastore.e_commerce.DTO;

import java.time.LocalDateTime;
import java.util.List;

public class PedidoDTO {
    private Long id;
    private Long usuarioId;
    private LocalDateTime fecha;
    private List<DetallePedidoDTO> detalles;
    private String estado;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public List<DetallePedidoDTO> getDetalles() {
        return detalles;
    }

    public void setDetalles(List<DetallePedidoDTO> detalles) {
        this.detalles = detalles;
            }
}