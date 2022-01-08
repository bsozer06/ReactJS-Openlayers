// React
import React, { useState, useEffect, useRef } from 'react'

// css
import "../App.css";

// openlayers
import 'ol/css';
import * as ol from 'ol';
import Map from 'ol';
import View  from 'ol';
import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';

import { useMapContext } from '../context/MapContext';
import Wms from '../services/Wms';
import Wfs from '../services/Wfs';
import ControlsWrapper from '../Controls/ControlsWrapper';



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

    // WFS Url
    const wfsUrl = "http://localhost:8080/geoserver/Burhan/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=Burhan%3ATr_iller&maxFeatures=2&outputFormat=application%2Fjson"



    return (
        <>
            <div ref={mapElement} className="map-container">{children}</div>
            <Wms options={ilSinirOption} />
            <Wfs url={wfsUrl}/>
            <ControlsWrapper />
        </>
    )
}

export default MapWrapper
