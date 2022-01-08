// import TileLayer from 'ol/layer/Tile'
// import TileWMS from 'ol/source/TileWMS';
// import { WFS } from 'ol/format';
// import {
//     and as andFilter,
//     equalTo as equalToFilter,
//     like as likeFilter,
// } from 'ol/format/filter';

import sampledata2 from "../data/sampledata.json"
import React, { useEffect, useState } from 'react'
import { useMapContext } from '../context/MapContext';

function Wfs(props) {

    const { map, setMap } = useMapContext();

    const [wfsData, setWfsData] = useState({});


    useEffect(() => {
        if (!map) return;

        fetch(props.url)
            .then(res => res.json())
            .then(data => setWfsData(data))
            // .finally(f => setWfsData(JSON.stringify(f)) )
            .catch(e => console.log(e));

    }, [map]);

    if (wfsData == null)  setWfsData(JSON.parse(sampledata2));

    console.log(wfsData);

    return null;
}

export default Wfs;
