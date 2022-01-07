import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS';

import React, { useEffect } from 'react'
import { useMapContext } from '../context/MapContext';


function Wms(props) {
    
    const { map, setMap } = useMapContext();

    useEffect(() => {
        if (!map) return;

        const ilSınır = new TileLayer({
            source: new TileWMS(props.options)
        });
        map.addLayer(ilSınır);

        return () => {
            if (map) {
                map.removeLayer(ilSınır);
            }
        }
    }, [map])


    return null;
}

export default Wms
