package com.luznoporto.pe.models;

import java.util.Objects;

public class CiaEletrica {

    private int id;
    private String nome;

    //Deverá ser uma entidade do entidade
    private String responsavelTecnico;

    private String cnpj;
    private String numero;
    private String cep;
    private String complento;
    private String cidade;
    private String estado;
    private String bairro;

    public CiaEletrica(){}

    public CiaEletrica(int id, String nome, String responsavelTecnico, String cnpj, String numero,
                       String cep, String complento, String cidade, String estado, String bairro) {
        this.id = id;
        this.nome = nome;
        this.responsavelTecnico = responsavelTecnico;
        this.cnpj = cnpj;
        this.numero = numero;
        this.cep = cep;
        this.complento = complento;
        this.cidade = cidade;
        this.estado = estado;
        this.bairro = bairro;
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

    public String getResponsavelTecnico() {
        return responsavelTecnico;
    }

    public void setResponsavelTecnico(String responsavelTecnico) {
        this.responsavelTecnico = responsavelTecnico;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getComplento() {
        return complento;
    }

    public void setComplento(String complento) {
        this.complento = complento;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CiaEletrica that = (CiaEletrica) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "CiaEletrica{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", responsavelTecnico='" + responsavelTecnico + '\'' +
                ", cnpj='" + cnpj + '\'' +
                ", numero='" + numero + '\'' +
                ", cep='" + cep + '\'' +
                ", complento='" + complento + '\'' +
                ", cidade='" + cidade + '\'' +
                ", estado='" + estado + '\'' +
                ", bairro='" + bairro + '\'' +
                '}';
    }
}
