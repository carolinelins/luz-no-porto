package com.luznoporto.pe.models;

import java.util.Objects;

public class Equipamento {

    private int id;
    private String nome;

    //Por que nao um boolean?
    //fica mais facil validar
    private Character situacao;

    public  Equipamento(){}

    public Equipamento(int id, String nome, Character situacao) {
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

    public Character getSituacao() {
        return situacao;
    }

    public void setSituacao(Character situacao) {
        this.situacao = situacao;
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
                ", situacao=" + situacao +
                '}';
    }


}
