import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS';
import { WFS } from 'ol/format';
import {
    and as andFilter,
    equalTo as equalToFilter,
    like as likeFilter,
} from 'ol/format/filter';


import React, { useEffect, useState } from 'react'
import { useMapContext } from '../context/MapContext';

function Wfs() {

    const { map, setMap } = useMapContext();

    const [wfsData, setWfsData] = useState("");

    useEffect(() => {
        if (!map) return;

        // var a = fetch("http://localhost:8080/geoserver/Burhan/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=Burhan%3ATr_iller&maxFeatures=2&outputFormat=application%2Fjson")
        //     .then(res => res.json())
        //     .then(data => setWfsData(data))
        //     .finally(f => console.log(f))
        //     .catch(e => console.log(e));

        //     debugger;

        // console.log(a);

    }, [wfsData]);



    return null;
}

export default Wfs;
