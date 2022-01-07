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
import {useMapContext} from '../context/MapContext';


function MapWrapper({children}) {
    const {map, setMap} = useMapContext();

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



    return (
        <>
                <div ref={mapElement} className="map-container">{children}</div>
        </>
    )
}

export default MapWrapper
