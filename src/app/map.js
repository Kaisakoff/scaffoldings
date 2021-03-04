import '../styles/map.scss';
import { Loader } from '@googlemaps/js-api-loader';

const divMap = document.querySelector('.map');
let myMap;


const loader = new Loader({
  apiKey: 'AIzaSyDc3b5_kCJhJjeWsnd2GWOTnr9OpA8_64w',
  version: 'weekly',
});
loader.load().then(() => {
  myMap = new google.maps.Map(divMap, {
    center: { lat: 53.893009, lng: 27.567444 },
    zoom: 5,
  });

  function addMarker(properties) {
    const marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap,
    });

    if (properties.images) {
      marker.setIcon(properties.images);
    }

    if (properties.info) {
      const infoWindow = new google.maps.InfoWindow({
        content: properties.info,
      });

      marker.addListener('click', () => {
        infoWindow.open(myMap, marker);
      });
    }
  }

  addMarker({
    coordinates: { lat: 53.893009, lng: 27.567444 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Minsk</h1><p>Capital of Belarus</p>',
  });

  addMarker({
    coordinates: { lat: 55.75222, lng: 37.61556 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Moscow</h1><p>Capital of Russia</p>',
  });

  addMarker({
    coordinates: { lat: 56.946, lng: 24.10589 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Riga</h1><p>Capital of Latvia</p>',
  });

  addMarker({
    coordinates: { lat: 54.687157, lng: 25.279652 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Vilnius</h1><p>Capital of Litva</p>',
  });

  addMarker({
    coordinates: { lat: 59.43696, lng: 24.75353 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Tallin</h1><p>Capital of Estonia</p>',
  });

  addMarker({
    coordinates: { lat: 50.450001, lng: 30.523333 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Kiev</h1><p>Capital of Ukraine</p>',
  });

  addMarker({
    coordinates: { lat: 52.229676, lng: 21.012229 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Warszawa</h1><p>Capital of Poland</p>',
  });

  addMarker({
    coordinates: { lat: 52.531677, lng: 13.381777 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Berlin</h1><p>Capital of Germany</p>',
  });

  addMarker({
    coordinates: { lat: 50.073658, lng: 14.418540 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Praha</h1><p>Capital of Czechia</p>',
  });

  addMarker({
    coordinates: { lat: 48.148598, lng: 17.107748 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Bratislava</h1><p>Capital of Slovakia</p>',
  });

  addMarker({
    coordinates: { lat: 48.210033, lng: 16.363449 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Wien</h1><p>Capital of Austria</p>',
  });

  addMarker({
    coordinates: { lat: 41.89193, lng: 12.51133 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Roma</h1><p>Capital of Italy</p>',
  });

  addMarker({
    coordinates: { lat: 48.876965, lng: 2.295138 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Paris</h1><p>Capital of France</p>',
  });

  addMarker({
    coordinates: { lat: 47.497913, lng: 19.040236 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Budapesht</h1><p>Capital of Hungary</p>',
  });

  addMarker({
    coordinates: { lat: 60.192059, lng: 24.945831 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Helsinki</h1><p>Capital of Finland</p>',
  });
  addMarker({
    coordinates: { lat: 59.332848, lng: 18.053135 },
    images: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    info: '<h1>Stockholm</h1><p>Capital of Sweden</p>',
  });
});
