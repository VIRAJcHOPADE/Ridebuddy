"use client"; 
import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext, useEffect, useRef, useState } from "react";
import {Map,Marker}  from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from './Markers';
import { SourceCordiContext } from '@/context/SourceCordiContext';
import { DestinationCordiContext } from '@/context/DestinationCordiContext';

const MAPBOX_DRIVING_ENDPOINT =
  "https://api.mapbox.com/directions/v5/mapbox/driving/";
const session_token = "5ccce4a4-ab0a-4a7c-943d-580e55542363";

const MapBoxMap = () => {
    const mapRef = useRef<any>();
   
    const { userLocation, setUserLocation } = useContext(UserLocationContext);
    const {soruceCordinates,setSourceCordinates}
    =useContext(SourceCordiContext);
    const {destinationCordinates,setDestinationCordinates}
    =useContext(DestinationCordiContext);

  // Check if userLocation is available and valid
  const isValidLocation = userLocation && !isNaN(userLocation.lng) && !isNaN(userLocation.lat);
  
  //Use to Fly to Source Marker Location
  useEffect(()=>{
    if(soruceCordinates){
      mapRef.current?.flyTo({
        center:[soruceCordinates.lng,
        soruceCordinates.lat],
        duration:2500
      })
    }
  },[soruceCordinates])

  //Use to Fly to Destination Markers Location
  useEffect(()=>{
    if(destinationCordinates){
      mapRef.current?.flyTo({
        center:[destinationCordinates.lng,
          destinationCordinates.lat],
        duration:2500
      })
    }
  },[destinationCordinates])

  

  return (
    <div className='p-5 bg-white'>
      <h2 className='text-[20px] font-semibold'>Map</h2>
      <div className='rounded-lg overflow-hidden'>
        {isValidLocation ? (
          <Map
          ref={mapRef}
            mapboxAccessToken='pk.eyJ1IjoidmlyYWpjaG9wYWRlIiwiYSI6ImNsbWcxaWhucTBnNzIzcXRqN21nYmRxaDUifQ.Z6dSZ0X9fPYLZ-srvEKJDQ'
            initialViewState={{
              longitude: userLocation.lng,
              latitude: userLocation.lat,
              zoom: 14
            }}
            style={{ width: "100%", height: 450, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Markers/>
          
          
          

          </Map>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </div>
  );
}

export default MapBoxMap