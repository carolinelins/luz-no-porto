import React from "react";
import { useFiltros } from "./providers/filtros"

function Periodo() {
    const { filtros, setFiltros } = useFiltros()

    return (
        <div className="pl-5 pt-4">
            <div className="pt-3">
                <div className="input-group mb-3 pt-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text pr-4">De:</label>
                        <input type="date" value={filtros.dataInicio} className="form-control" onChange={(evt) => setFiltros(prevState => ({ ...prevState, dataInicio: evt.target.value }))}></input>
                    </div>
                </div>
                <div className="input-group mb-3 pt-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text pr-4">Até:</label>
                        <input type="date" value={filtros.dataFim} className="form-control" onChange={(evt) => setFiltros(prevState => ({ ...prevState, dataFim: evt.target.value }))}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Periodo;