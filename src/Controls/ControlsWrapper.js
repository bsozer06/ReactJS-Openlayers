import React, { useEffect } from 'react'
import { useMapContext } from '../context/MapContext'

import CustomVectorStyles from '../Styles/CustomVectorStyles';

// ol
import  MousePosition  from "ol/control/mouseposition";
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';


// ol-ext
import Bar from "ol-ext/control/Bar";

function ControlsWrapper() {
    const {map, setMap} = useMapContext();

    const storedVector = new VectorLayer({
        title: "Çizilenler",
        className: "Noktalar",
        source: new VectorSource(),
        // style: CustomVectorStyles
    })

    useEffect(() => {
        if (!map) return;

        const mousePosition = new MousePosition();

        map.controls.push(mousePosition);

        return () => map.controls.remove(mousePosition);

    }, [map])

    useEffect(() => {
        
        return () => {
            var mainBar = new Bar({
                toggleOne: true,	// one control active at the same time
                group: false			// group controls together
            });
            map.controls.push(mainBar);
        }
    }, [])

    return null;
}

export default ControlsWrapper
