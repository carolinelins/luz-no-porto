package com.luznoporto.pe.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luznoporto.pe.models.Locatario;
import com.luznoporto.pe.services.LocatarioService;

@RestController
@RequestMapping(value = "/locatarios")
public class LocatarioController {

	@Autowired
    LocatarioService locatarioService;

    @GetMapping
    public ResponseEntity<List<Locatario>> findAll(){

    	List<Locatario> locatarios = locatarioService.listarLocatarios();
    	
    	return ResponseEntity.ok().body(locatarios);
        
    }
    
    
    /*public ResponseEntity<Locatario> insert(@RequestBody Locatario locatario){
    	
    	//locatario = locatarioRepository.save(locatario);
    	//return ResponseEntity.ok().body(locatario);
       
    }*/

}
