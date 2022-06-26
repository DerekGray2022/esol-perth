import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibGl0dGxlLXdpc2UtbW9ua2V5IiwiYSI6ImNsNHNoNG9vcjEzejIzY3Myc3dldHg4aTEifQ.e2FFz87y6yYcHmuATECJ_g';

const EsolMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-3.4324);
    const [lat, setLat] = useState(56.3966);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <>
            <div className='container'>
                <div ref={mapContainer} className="map-container" />
            </div>
        </>
    );
};

export default EsolMap;

