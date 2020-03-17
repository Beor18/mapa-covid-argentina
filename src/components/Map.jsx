import React, { useEffect, useRef } from "react";
import L from "leaflet";
import GeoJsonComponent from '../components/GeoJsonComponent';
import places2017 from '../data/data.json';

const style = {
  wrapper: {
    height: '100%',
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

function Map({ markerPosition }) {
  
  const pointToLayer2017 = (feature, latlng) => {
    return L.circleMarker(latlng, geojsonMarkerOptions2017);
  }
  
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [-38.4160957, -63.6166725],
      zoom: 4,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add marker
  const markerRef = useRef(null);
  useEffect(
    () => {
      navigator.geolocation.getCurrentPosition((markerPosition) => {
        let latlng = new L.LatLng(markerPosition.coords.latitude, markerPosition.coords.longitude);
        markerRef.current = L.marker(latlng).addTo(mapRef.current) && L.geoJSON(places2017, {
          style: geojsonMarkerOptions2017, pointToLayer: pointToLayer2017
        }).addTo(mapRef.current);
      })
    },
    [markerPosition]
  );

  return <div id="map" style={style.wrapper} />;
}

export default Map;
