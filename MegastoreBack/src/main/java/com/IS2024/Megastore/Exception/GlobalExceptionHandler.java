package com.megastore.e_commerce.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;


@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(RecursoNoEncontrado.class)
  public ResponseEntity<?> handleRecursoNoEncontradoException(RecursoNoEncontrado ex, WebRequest request) {
    return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
  }

  // Otras excepciones personalizadas pueden manejarse aquí
}
