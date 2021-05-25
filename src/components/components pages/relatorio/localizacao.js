import React, { useState } from "react";


function FiltroLocalizacao() {
    const [local] = React.useState([

        {
            label: "Todos",
            value: "Todos"
        },

        {
            label: "Sala Amarela",
            value: "Sala Amarela"
        },

        {
            label: "Sala Verde",
            value: "Sala Verde"
        },

        {
            label: "Sala Marrom",
            value: "Sala Marrom"
        },

        {
            label: "Sala Roxa",
            value: "Sala Roxa"
        },

        {
            label: "Sala Amarela",
            value: "Sala Amarela"
        },

        {
            label: "Sala Azul",
            value: "Sala Azul"
        },

        {
            label: "Sala Vermelha",
            value: "Sala Vermelha"
        },

    ])

    return (
        <div>
            <select>
                {local.map(local => (
                    <option
                        id="local"
                        key={local.value}
                        value={local.value}
                    >
                        {local.label}
                    </option>

                ))}
            </select>
        </div>)

}
export default FiltroLocalizacao;