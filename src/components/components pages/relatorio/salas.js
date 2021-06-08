import React, { useEffect, useState } from 'react'
import api from '../../../api'
import { useFiltros } from './providers/filtros'

function Salas() {
    const [salas, setSalas] = useState([])
    const { filtros, setFiltros } = useFiltros()

    useEffect(() => {
        async function getSalas() {
            const response = await api.get("/salas")
            setSalas(response.data)
        }
        getSalas()
    })

    return (
        <select onChange={e => setFiltros(prevState => ({ ...prevState, sala: e.target.value }))}>
            {salas.map((sala) => (
                <option key={sala.id} value={sala.nome}>
                    {sala.nome}
                </option>
            ))}
        </select>
    )
}

/* class Salas extends React.Component {
    state = {
        salas: []
    }

    async componentDidMount() {
        const response = await api.get('/salas')

        this.setState({ salas: response.data })
    }

    render() {
        const { salas } = this.state

        return(
            <select>
                {salas.map((sala) => (
                    <option key={sala.id}>
                        {sala.nome}
                    </option>
                ))}
            </select>
        )
    }
} */

export default Salas