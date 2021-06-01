package com.luznoporto.pe.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luznoporto.pe.models.Medidor;
import com.luznoporto.pe.services.MedidorService;



@RestController
@RequestMapping(value = "/medidores")
@CrossOrigin(origins = "http://localhost:3000")
public class MedidorController {

	@Autowired
	MedidorService medidorService;
	
	
    @GetMapping
    public ResponseEntity<List<Medidor>> findAll(){
    	
    	List<Medidor> medidores = medidorService.ListarMedidores();

        
        return ResponseEntity.ok().body(medidores);
    }
}