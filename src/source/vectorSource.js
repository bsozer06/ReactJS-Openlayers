import VectorSource from 'ol/source/Vector'
import React from 'react'

function vectorSource({ features }) {
    return new VectorSource({ features });
}

export default vectorSource;
