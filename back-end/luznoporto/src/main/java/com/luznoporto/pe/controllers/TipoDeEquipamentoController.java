package com.luznoporto.pe.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luznoporto.pe.models.TipoDeEquipamento;
import com.luznoporto.pe.repositories.TipoDeEquipamentoRepository;
import com.luznoporto.pe.services.TipoDeEquipamentoService;



@RestController
@RequestMapping(value = "/tiposDeEquipamentos")
@CrossOrigin(origins = "http://localhost:3000")
public class TipoDeEquipamentoController {

	@Autowired
	TipoDeEquipamentoService tipoDeEquipamentoDervice;
	
	@Autowired
	TipoDeEquipamentoRepository tipoDeEquipamentoRepository;
		
    @GetMapping
    public ResponseEntity<List<TipoDeEquipamento>> findAll(){
    	List<TipoDeEquipamento> tiposDeEquipamentos = tipoDeEquipamentoDervice.ListarTiposDeEquipamentos();
    	return ResponseEntity.ok().body(tiposDeEquipamentos);
    }
    
    
    @GetMapping("/{id}")
    public ResponseEntity<TipoDeEquipamento> buscarPorId(@PathVariable int id){
    	
    	Optional<TipoDeEquipamento> tipoDeEquipamento = tipoDeEquipamentoRepository.findById(id);
    	
    	return ResponseEntity.ok().body(tipoDeEquipamento.get());
    }
    
}
