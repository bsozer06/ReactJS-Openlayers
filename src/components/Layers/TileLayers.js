import { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development';

import MapContext from '../../context/MapContext'

import TileLayer from "ol/layer/Tile";


function TileLayers({ source, zIndex = 0 }) {
    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;
        const tileLayer = new TileLayer({
            source: source,
            zIndex: zIndex,
        });

        map.addLayer(tileLayer);
        tileLayer.setZIndex(zIndex);

        return () => {
            if (map) map.removeLayer(tileLayer);
        };

    }, [map])

    return null;
}

export default TileLayers;
