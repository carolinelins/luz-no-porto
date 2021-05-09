package com.luznoporto.pe.models;

import java.util.Objects;

public class Porta {

    private int id;

    public Porta(){}

    public Porta(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Porta porta = (Porta) o;
        return id == porta.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Porta{" +
                "id=" + id +
                '}';
    }
}
