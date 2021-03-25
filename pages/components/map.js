import React, { useState, useEffect } from "react"
import { useGoogleMaps } from "react-hook-google-maps"
import ZoomOut from './svgs/zoom-out'
import ZoomIn from './svgs/zoom-in'
import TravelearMark from "./svgs/travelear-mark";

export default function Map(){

  const { ref, map, google } = useGoogleMaps("", {
    center: {
      lat: 39.1760737, 
      lng: 23.4324934
    },
    zoom: 10,
    minZoom:5,
    maxZoom:15,
    styles: [
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "lightness": -100
              },
              {
                  "visibility": "off"
              },
              {
                  "saturation": "-77"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#848ea4"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-70"
              },
              {
                  "lightness": "0"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "hue": "#0050ff"
              },
              {
                  "saturation": "0"
              },
              {
                  "lightness": "0"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-80"
              },
              {
                  "lightness": "-90"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-80"
              },
              {
                  "lightness": "-70"
              },
              {
                  "visibility": "off"
              },
              {
                  "gamma": "1"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-85"
              },
              {
                  "lightness": "60"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-70"
              },
              {
                  "lightness": "50"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "0"
              },
              {
                  "lightness": "-11"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "hue": "#0060ff"
              },
              {
                  "lightness": "0"
              },
              {
                  "saturation": "0"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "lightness": -100
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#0066ff"
              },
              {
                  "saturation": "0"
              },
              {
                  "lightness": 100
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#000000"
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": -100
              },
              {
                  "visibility": "off"
              }
          ]
      }
  ],
    disableDefaultUI: true,
  });

  if (map) {
    const uluru = { lat: 39.1760737, lng: 23.4324934 }
    const svgMarker = {
        path: "M6.5,18.5974817 C6.5,18.5974817 0,10.2757612 0,6.6197656 C0,2.96377001 2.91014913,0 6.5,0 C10.0898509,0 13,2.96377001 13,6.6197656 C13,10.2757612 6.5,18.5974817 6.5,18.5974817 Z M1.31954887,7.13884087 C1.31954887,10.0644323 6.52443609,16.7236183 6.52443609,16.7236183 C6.52443609,16.7236183 7.1607245,16.1941502 8.59463111,13.8494409 C9.17308699,12.9035558 6.52443609,10.8389718 7.83272145,9.06523704 C8.42069387,8.26808135 9.58582002,8.41080415 10.6575717,8.41080415 C11.7293233,8.41080415 11.7293233,7.39670316 11.7293233,7.13884087 C11.7293233,4.21324941 9.39901593,2.34612052 6.52443609,2.34612052 C3.64985626,2.34612052 1.31954887,4.21324941 1.31954887,7.13884087 Z",
        fillColor: "#E74C3C",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 1.5,
        anchor: new google.maps.Point(12, 12),
      };
    new google.maps.Marker({ 
        position: uluru, 
        map: map,
        icon: svgMarker
     });
  }

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!map) {
      return;
    }
    setValue(map.getZoom());
    const listener = map.addListener("zoom_changed", () => {
      setValue(map.getZoom());
    });
    return () => google.maps.event.removeListener(listener);
  }, [map, google]);
  const handleZoomUpdate = (zoomChange = 1) => {
    const nextZoom = value + zoomChange;
    if (nextZoom < 0) {
      return;
    }
    map.setZoom(nextZoom);
  };

  return (
    <div className="w-full h-full">
      <div ref={ref} className="w-full h-full"/>
      <div className="bottom-16 right-16 fixed space-x-4 flex">
          <div className="w-16 h-16">
            <button onClick={() => handleZoomUpdate(1)}><ZoomIn/></button>
          </div>
          <div className="w-16 h-16">
            <button onClick={() => handleZoomUpdate(-1)} disabled={value < 1}><ZoomOut/></button>
          </div>
      </div>
    </div>
  )
}