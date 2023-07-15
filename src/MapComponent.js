import React, { useEffect, useState } from 'react';
import './css/style_offer.css';

const MapComponent = ({ mapLoaded, setMapLoaded }) => {
  useEffect(() => {
    if (!mapLoaded) {
      const script = document.createElement('script');
      script.src = 'https://1map.com/js/script-for-user.js?embed_id=965127';
      script.async = true;
      script.onload = () => {
        window.OneMap.initMap({
          query: 'Świerkowa 3, Płock, Polska',
          width: 350,
          height: 500,
          satellite: false,
          zoom: 16,
          placeId: 'ChIJE2lWob1wHEcRfjrOAXS_LuQ',
          cid: '0xe42ebf7401ce3a7e',
          coords: [52.53690289999999, 19.7050146],
          lang: 'pl',
          queryString: 'Świerkowa 3, Płock, Polska',
          centerCoord: [52.53690289999999, 19.7050146],
          id: 'map-9cd199b9cc5410cd3b1ad21cab2e54d3',
          embed_id: '965127',
        });
        setMapLoaded(true);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [mapLoaded, setMapLoaded]);

  return (
    <div className="map">
      <h2>Siedziba firmy</h2>
      <div id="map">
        <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
          <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
          <a href="https://1map.com/pl/map-embed">1 Map</a>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
