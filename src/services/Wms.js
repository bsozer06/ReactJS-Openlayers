import TileLayer from 'ol/layer/tile'
import TileWMS from 'ol/source/tilewms';

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
