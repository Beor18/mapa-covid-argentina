import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import GeoJsonComponent from '../components/GeoJsonComponent';
import places2017 from '../data/data.json';

const styles = {
  wrapper: {
    height: 600,
    width: '100%',
    margin: '0 auto',
    display: 'flex'
  },
  map: {
    flex: 1
  }
};

const geojsonMarkerOptions2017 = {
  radius: 4,
  fillColor: "#EE4266",
  color: "#EE4266",
  weight: 5,
  opacity: 1,
  fillOpacity: 0.4
};

const geojsonMarkerOptions2018 = {
  radius: 4,
  fillColor: "#6E3BFB",
  color: "#000",
  weight: 2,
  opacity: 1,
  fillOpacity: 0.4
};

const pointToLayer2017 = (feature, latlng) => {
  return L.circleMarker(latlng, geojsonMarkerOptions2017);
}

const pointToLayer2018 = (feature, latlng) => {
  return L.circleMarker(latlng, geojsonMarkerOptions2018);
}

const Moves = props => {
  return (
    <div style={styles.wrapper}>
      <Map style={styles.map} center={props.center} zoom={props.zoom}>
        <TileLayer url={props.url} />
        <GeoJsonComponent
          popupContent={"Un contenido"}
          data={places2017}
          pointToLayer={pointToLayer2017}
        />
      </Map>
    </div>
  );
}

Moves.defaultProps = {
  center: [-34.6036844, -58.3815591],
  zoom: 10,
  url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
};

export default Moves;