package com.luznoporto.pe.repositories;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.luznoporto.pe.models.Medicao;



public interface MedicaoRepository extends JpaRepository<Medicao, Integer> {

	
	Optional<List<Medicao>> findByInicioMedicaoBetween(Date inicioMedicao, Date  fimMedicao);
  
}
