import React, { useState } from 'react'

export const FiltrosContext = React.createContext({})

export const FiltrosProvider = (props) => {
    const [ filtros, setFiltros ] = useState({
        sala: '',
        periodo: ''
    }) 

    return (
        <FiltrosContext.Provider value={{ filtros, setFiltros }}>
            {props.children}
        </FiltrosContext.Provider>
    )
}

export const useFiltros = () => React.useContext(FiltrosContext)