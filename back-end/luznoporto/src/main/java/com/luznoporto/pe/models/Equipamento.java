package com.luznoporto.pe.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_equipamento")
public class Equipamento {

	@Id
	@Column(name = "equ_id_equip_pk")
    private int id;
	
	@Column(name = "equ_nm_equip")
    private String nome;

	//mdd_id_medidor_pk
	@JsonIgnore
	@Column(name = "equ_mdd_id_medidor_pk_fk")
	private int idMedidor;
	
	//spr_id_sala_pk
	@JsonIgnore
	@Column(name = "equ_spr_id_sala_pk_fk")
	private int idSala;
	
	
    //Por que nao um boolean?
    //fica mais facil validar
    //private Character situacao;

    public  Equipamento(){}

    public Equipamento(int id, String nome) {
        this.id = id;
        this.nome = nome;
   }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    
    
    
    public int getIdMedidor() {
		return idMedidor;
	}

	public void setIdMedidor(int idMedidor) {
		this.idMedidor = idMedidor;
	}

	public int getIdSala() {
		return idSala;
	}

	public void setIdSala(int idSala) {
		this.idSala = idSala;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Equipamento that = (Equipamento) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Equipamento{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }


}
