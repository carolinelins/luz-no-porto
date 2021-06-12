import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { useFiltros } from './providers/filtros';

function Salas() {
  const [salas, setSalas] = useState([]);
  const { setFiltros } = useFiltros();

  useEffect(() => {
    async function getSalas() {
      const response = await api.get('/salas');
      setSalas(response.data);
    }
    getSalas();
  });

  return (
    <div className="localizacao">
      <div className="input-group mb-3 pt-3">
        <div className="input-group-prepend">
          <label className="input-group-text pr-4">Localização</label>
        </div>
        <select
          className="custom-select"
          onChange={(e) =>
            setFiltros((prevState) => ({ ...prevState, sala: e.target.value }))
          }
        >
          <option>Todas</option>
          {salas.map((sala) => (
            <option key={sala.id} value={sala.nome}>
              {sala.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Salas;
