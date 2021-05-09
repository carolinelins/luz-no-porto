package com.luznoporto.pe.models;

import java.util.Objects;

public class Sala {

    private int id;
    private String nome;
    private Double metragem;
    private int andar;

    public Sala(){}

    public Sala(int id, String nome, Double metragem, int andar) {
        this.id = id;
        this.nome = nome;
        this.metragem = metragem;
        this.andar = andar;
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

    public Double getMetragem() {
        return metragem;
    }

    public void setMetragem(Double metragem) {
        this.metragem = metragem;
    }

    public int getAndar() {
        return andar;
    }

    public void setAndar(int andar) {
        this.andar = andar;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sala sala = (Sala) o;
        return id == sala.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Sala{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", metragem=" + metragem +
                ", andar=" + andar +
                '}';
    }


}
