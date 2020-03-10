import React from 'react';
import { GeoJSON } from 'react-leaflet';

export default function GeoJsonComponent(props) {
    const handleOnEachFeature = (feature, layer) => {
      let popupContent = "";
      if (props.popupContent.length) popupContent = props.popupContent;
      else if (feature.properties && feature.properties.popupContent) {
        popupContent = feature.properties.popupContent;
      }
  
      layer.bindPopup(popupContent);
      layer.on({
        mouseover: e => {
          layer.openPopup();
        },
        mouseout: e => {
          layer.closePopup();
        }
      });
    };
    return <GeoJSON {...props} onEachFeature={handleOnEachFeature} />
}

GeoJsonComponent.defaultProps = {
    popupContent: '',
}