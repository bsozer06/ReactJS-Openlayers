import { createContext, useContext, useState } from 'react'

const MapContext = new createContext();

export const MapContextProvider = ({ children }) => {

    const [map, setMap] = useState();
    const value = {map, setMap};

    return <MapContext.Provider value={value}>{children}</MapContext.Provider>
};

export const useMapContext = () => useContext(MapContext); 


