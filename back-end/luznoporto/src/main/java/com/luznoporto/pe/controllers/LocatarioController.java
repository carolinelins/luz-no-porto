package com.luznoporto.pe.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luznoporto.pe.dto.LocatarioDto;
import com.luznoporto.pe.dto.SalaDto;
import com.luznoporto.pe.models.Locatario;
import com.luznoporto.pe.models.Sala;
import com.luznoporto.pe.repositories.LocatarioRepository;
import com.luznoporto.pe.repositories.SalaRepository;
import com.luznoporto.pe.services.LocatarioService;

@RestController
@RequestMapping(value = "/locatarios")
@CrossOrigin(origins = "http://localhost:3000")
public class LocatarioController {

	@Autowired
    LocatarioService locatarioService;
	
	
	@Autowired
	SalaRepository salaRepository;
	
	@Autowired
	LocatarioRepository locatarioRepository;

    @GetMapping
    public ResponseEntity<List<Locatario>> findAll(){

    	
    	List<Locatario> locatarios = locatarioService.listarLocatarios();
    	
    	return ResponseEntity.ok().body(locatarios);
        
    }
    
    @GetMapping("/{cnpj}")
    public ResponseEntity<LocatarioDto> findById(@PathVariable String cnpj){
   	
   	Locatario locatario = locatarioRepository.findByCnpj(cnpj);
   	//String cnpjLocador = locatario.getCnpj();
   	Sala sala = salaRepository.findByLocatario(locatario.getCnpj());
   	
   	return ResponseEntity.ok().body(new LocatarioDto(locatario, new SalaDto(sala.getId(), sala.getNome()) ));
    	
    	
    }
    
    
    /*public ResponseEntity<Locatario> insert(@RequestBody Locatario locatario){
    	
    	//locatario = locatarioRepository.save(locatario);
    	//return ResponseEntity.ok().body(locatario);
       
    }*/

}
