import React from 'react'
import { useEffect } from 'react';

import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

//Token From mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidmlyYWpjaG9wYWRlIiwiYSI6ImNsbWcxaWhucTBnNzIzcXRqN21nYmRxaDUifQ.Z6dSZ0X9fPYLZ-srvEKJDQ'

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [73.713188,18.678614],
        zoom: 10,
        })
      });

  return (
    <Wrapper id="map"></Wrapper>
  )
}

export default Map;

const Wrapper = tw.div`
flex flex-1  shadow-[1px_-4px_13px_3px_#00000024]
`;