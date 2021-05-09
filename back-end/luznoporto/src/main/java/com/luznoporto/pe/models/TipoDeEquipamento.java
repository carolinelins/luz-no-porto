package com.luznoporto.pe.models;

public class TipoDeEquipamento {

    private int id;
    private String nome;


    public TipoDeEquipamento(){}

    public TipoDeEquipamento(int id, String nome) {
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



}
