import React, { useState } from 'react';
import { useFiltros } from './providers/filtros';
import { Button } from 'react-bootstrap';

function Periodo() {
  const { filtros, setFiltros } = useFiltros();
  const [inputDataInicio, setInputDataInicio] = useState(filtros.dataInicio);
  const [inputDataFim, setInputDataFim] = useState(filtros.dataFim);

  function mudarIntervaloDatas(dataInicio, dataFim) {
    if (dataInicio > dataFim) {
      return alert('A data inicial deve ser anterior à final!');
    }

    const fim = new Date(dataFim);
    const inicio = new Date(dataInicio);
    if (fim - inicio > 2592000000) {
      return alert(
        'O intervalo entre as datas não deve ser superior a 30 dias!',
      );
    }

    setFiltros((prevState) => ({ ...prevState, dataInicio, dataFim }));
  }

  return (
    <div className="pl-5">
      <div className="pt-3">
        <div className="input-group mb-3 pt-3">
          <div className="input-group-prepend">
            <label className="input-group-text pr-4">De:</label>
            <input
              type="date"
              value={inputDataInicio}
              className="form-control"
              onChange={(evt) => setInputDataInicio(evt.target.value)}
            ></input>
          </div>
        </div>
        <div className="input-group mb-3 pt-3">
          <div className="input-group-prepend">
            <label className="input-group-text pr-4">Até:</label>
            <input
              type="date"
              value={inputDataFim}
              className="form-control"
              onChange={(evt) => setInputDataFim(evt.target.value)}
            ></input>
          </div>
        </div>
        <div className="pt-3">
          <Button
            variant="primary"
            onClick={() => mudarIntervaloDatas(inputDataInicio, inputDataFim)}
          >
            Gerar Relatório
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Periodo;
