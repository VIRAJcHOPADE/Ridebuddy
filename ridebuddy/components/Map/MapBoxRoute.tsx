import React from 'react'
import Map, { Layer, Source } from "react-map-gl";

interface LineStringFeature {
  type: 'Feature';
  geometry: {
    type: 'LineString';
    coordinates: any[];
  };
  properties: {};
}

function MapBoxRoute(props: any) {
  const lineStringFeature: LineStringFeature = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: props.coordinates,
    },
    properties: {},
  };

  return (
    <Source type="geojson" data={lineStringFeature}>
      <Layer
        type="line"
        layout={{ 'line-join': 'round', 'line-cap': 'square' }}
        paint={{ 'line-color': '#0462d4', 'line-width': 4 }}
      />
    </Source>
  )
}

export default MapBoxRoute
