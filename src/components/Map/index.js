import TileLayers from "../Layers/TileLayers";
import Layers from "../Layers/Layers";
import Mapping from "./Mapping.js"

import React, { useState } from "react";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
// import { osm, vectorSource } from "../../source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import osm from "../../source/osm";

function Map() {
    const [center, setCenter] = useState([0, 0]);
    const [zoom, setZoom] = useState(9);
  
    const [showLayer1, setShowLayer1] = useState(true);
    const [showLayer2, setShowLayer2] = useState(true);
  
    return (
        <>
            <Mapping center={center} zoom={zoom}>
                <Layers>
                    <TileLayers source={osm()} zIndex={0}></TileLayers>
                </Layers>
            </Mapping>
        </>
    )
}

export default Map
