// React
import React, { useState, useEffect, useRef } from 'react'

// css
import "../App.css";

// openlayers
import 'ol/ol.css';
import { Map, View } from 'ol';
import * as ol from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useMapContext } from '../context/MapContext';
import Wms from '../services/Wms';
import Wfs from '../services/Wfs';



function MapWrapper({ children }) {
    const { map, setMap } = useMapContext();

    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    useEffect(() => {
        var initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            })
        });

        setMap(initialMap);
    }, []);

    // WMS Options
    const ilSinirOption = {
        url: 'http://localhost:8080/geoserver/Burhan/wms',
        params: { 'LAYERS': 'Burhan:Tr_iller', 'TILED': true },
        serverType: 'geoserver',
        transition: 0,
    };



    return (
        <>
            <div ref={mapElement} className="map-container">{children}</div>
            <Wms options={ilSinirOption} />
            <Wfs />
        </>
    )
}

export default MapWrapper
