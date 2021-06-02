package com.luznoporto.pe.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_medidor")
public class Medidor {

	@Id
	@Column(name = "mdd_id_medidor_pk")
    private int id;
	
	@Column(name = "mdd_ds_medidor")
    private String nome;

    //Por que nao um boolean?
    //fica mais facil validar
	@Column(name="mdd_st_medidor")
    private char situacao;

    public Medidor(){}

    public Medidor(int id, String nome, char situacao) {
        this.id = id;
        this.nome = nome;
        this.situacao = situacao;
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

    public char getSituacao() {
        return situacao;
    }

    public void setSituacao(char situacao) {
        this.situacao = situacao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Medidor medidor = (Medidor) o;
        return id == medidor.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Medidor{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", situacao=" + situacao +
                '}';
    }
}
