import React from 'react'
import { useEffect } from 'react';

import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

//Token From mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidmlyYWpjaG9wYWRlIiwiYSI6ImNsbWcxaWhucTBnNzIzcXRqN21nYmRxaDUifQ.Z6dSZ0X9fPYLZ-srvEKJDQ'

const Map = (props) => {
  
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [73.713188,18.678614],
        zoom: 7,
        })
        
        if(props.pickupCoordinate){
          addToMap(map, props.pickupCoordinate)
        }
        
        if(props.dropoffCoordinate){
          addToMap(map, props.dropoffCoordinate)
        }
        
        if(props.pickupCoordinate && props.dropoffCoordinate){
         //fitbounds is used to auto zoom on the marker 
          map.fitBounds([
            props.pickupCoordinate, // southwestern corner of the bounds
            props.dropoffCoordinate // northeastern corner of the bounds
            ],{
              padding: 60
            });
        }

      },[props.pickupCoordinate,props.dropoffCoordinate]);

      const addToMap = (map,coordinates) => {
        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
      }
      
    
  return (
    <Wrapper id="map"></Wrapper>
  )
}

export default Map;

const Wrapper = tw.div`
flex flex-1  shadow-[1px_-4px_13px_3px_#00000024] h-1/2
`;