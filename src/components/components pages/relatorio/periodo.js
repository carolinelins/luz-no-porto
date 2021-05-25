import React, { useState } from "react";

function FiltroPeriodo() {
    const [periodo] = React.useState([

        {
            label: "Ontem",
            value: "Ontem"
        },

        {
            label: "Últimos 7 dias",
            value: "Últimos 7 dias"
        },

        {
            label: "Últimos 15 dias",
            value: "Últimos 15 dias"
        },

        {
            label: "Últimos 30 dias",
            value: "Últimos 30 dias"
        },

        {
            label: "Último ano",
            value: "Último ano"
        },


    ])

    return (
        <div>
            <select>
                {periodo.map(periodo => (
                    <option
                        id="periodo"
                        key={periodo.value}
                        value={periodo.value}
                    >
                        {periodo.label}
                    </option>

                ))}
            </select>
        </div>)

}
export default FiltroPeriodo;