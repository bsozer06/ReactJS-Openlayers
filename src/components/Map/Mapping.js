// React
import React, { useState, useEffect, useRef } from 'react'

// css
import "../../App.css";

// openlayers
import 'ol/ol.css';
import { Map, View } from 'ol';
import * as ol from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MapContext from '../../context/MapContext';


function Mapping({ children, zoom, center }) {

    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    // useEffect(() => {
    //     const initialMap = new Map({
    //         target: mapElement.current,
    //         layers: [
    //             new TileLayer({
    //                 source: new OSM(),
    //             }),
    //         ],
    //         view: new View({
    //             center: [0, 0],
    //             zoom: 0,
    //         })
    //     });

    //     setMap(initialMap);
    // }, []);

    // on component mount
    useEffect(() => {
        let options = {
            view: new ol.View({ zoom, center }),
            layers: [],
            controls: [],
            overlays: []
        };

        let mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, []);

    // zoom change handler
    useEffect(() => {
        if (!map) return;

        map.getView().setZoom(zoom);
    }, [zoom]);

    // center change handler
    useEffect(() => {
        if (!map) return;

        map.getView().setCenter(center)
    }, [center])


    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapElement} className="map-container">{children}</div>
        </MapContext.Provider>
    )
}

export default Mapping
