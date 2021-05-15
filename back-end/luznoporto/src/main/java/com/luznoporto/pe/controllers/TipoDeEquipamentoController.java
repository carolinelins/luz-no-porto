package com.luznoporto.pe.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luznoporto.pe.models.TipoDeEquipamento;
import com.luznoporto.pe.services.TipoDeEquipamentoService;



@RestController
@RequestMapping(value = "/tiposDeEquipamentos")
public class TipoDeEquipamentoController {

	@Autowired
	TipoDeEquipamentoService tipoDeEquipamentoDervice;
		
    @GetMapping
    public ResponseEntity<List<TipoDeEquipamento>> findAll(){
    	List<TipoDeEquipamento> tiposDeEquipamentos = tipoDeEquipamentoDervice.ListarTiposDeEquipamentos();
    	return ResponseEntity.ok().body(tiposDeEquipamentos);
    }
}
