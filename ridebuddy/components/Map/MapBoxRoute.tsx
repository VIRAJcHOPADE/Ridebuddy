"use client";
import React from "react";
import Map, {
  AttributionControl,
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Popup,
  Source,
} from "react-map-gl";
function MapBoxRoute(props: any) {
  const geoJsonData = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: props.coordinates,
    },
    properties: {}, // Add any properties you need here
  };

  return (

      <Layer
        type="line"
        layout={{ "line-join": "round", "line-cap": "square" }}
        paint={{ "line-color": "#0462d4", "line-width": 4 }}
      />

  );
}

export default MapBoxRoute;
