package com.luznoporto.pe.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luznoporto.pe.models.Medicao;
import com.luznoporto.pe.services.MedicaoService;


@RestController
@RequestMapping(value = "/medicoes")
@CrossOrigin(origins = "http://localhost:3000")
public class MedicaoController {

	@Autowired
	MedicaoService medicaoService;
		
    @GetMapping
    public ResponseEntity<List<Medicao>> findAll(){
    	
    	List<Medicao> medicoes = medicaoService.ListarMedicoes();

        return ResponseEntity.ok().body(medicoes);
    }
}
