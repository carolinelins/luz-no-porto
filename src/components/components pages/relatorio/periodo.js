import React from "react";
import { useFiltros } from "./providers/filtros"

function Periodo() {
    const { filtros, setFiltros } = useFiltros()

    return (
        <div>
            <div>
                <div>
                    <label className="pr-3">De:</label>
                    <input type="date" value={filtros.dataInicio} onChange={(evt) => setFiltros(prevState => ({ ...prevState, dataInicio: evt.target.value}))}></input>
                </div>
                <div>
                    <label className="pt-2 pr-3">Até:</label>
                    <input type="date" value={filtros.dataFim} onChange={(evt) => setFiltros(prevState => ({ ...prevState, dataFim: evt.target.value}))}></input>
                </div>
            </div>
        </div>
    )
}

export default Periodo;