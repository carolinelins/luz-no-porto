import React, { useEffect } from 'react';
import Api from '../../../api';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['Option 1', 'Option 2'];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [locatarios, setLocatarios] = React.useState([]);
  const [tiposEquipamentos, setTiposEquipamentos] = React.useState([]);
  const [localizacaoSalas, setLocalizacaoSalas] = React.useState([]);

  useEffect(() => {
    Api.get('/locatarios')
      .then((response) => {
        setLocatarios([
          { nomeFantasia: 'Todos', cnpj: '-1' },
          ...response.data,
        ]);
        console.log('locatarios', response.data);
      })
      .catch((error) => {
        console.log('error', error);
        //inserir alert
      });
  }, []);

  useEffect(() => {
    if (value) {
      console.log('locatario alterado');
      Api.get(`/salas/${value.cnpj}`)
        .then((response) => {
          setLocalizacaoSalas(response.data);
          console.log('salas', response.data);
        })
        .catch((error) => {
          console.log('error', error);
          //inserir alert
        });
    }

    // Api.get('/tiposDeEquipamentos')
    //   .then((response) => {
    //     setTiposEquipamentos(response.data);
    //     console.log('tiposequipamentos', response.data);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //     //inserir alert
    //   });
  }, [value]);

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={locatarios}
        getOptionLabel={(option) => option.nomeFantasia}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Locatários" variant="outlined" />
        )}
      />
    </div>
  );
}
