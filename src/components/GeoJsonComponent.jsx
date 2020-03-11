import React from 'react';
import { GeoJSON } from 'react-leaflet';

export default function GeoJsonComponent(props) {
    const handleOnEachFeature = (features, layer) => {
      let popupContent = "";
      if (props.popupContent.length) popupContent = features.properties.lugar;
      else if (features.properties && features.properties.popupContent) {
        popupContent = features.properties.popupContent;
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