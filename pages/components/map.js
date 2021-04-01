import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { useGoogleMaps } from "react-hook-google-maps"
import ZoomOut from './svgs/zoom-out'
import ZoomIn from './svgs/zoom-in'

export default function Map(){

    const router = useRouter()
    const { ref, map, google } = useGoogleMaps("AIzaSyB1GefB4OQG2IiRBwzjVdM98a376eXOwcE", {
        center: {
        lat: -33.890542, 
        lng: 151.274856
        },
        zoom: 15,
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
    const recordings = [
        ["Bondi Beach", -33.890542, 151.274856, 4],
        ["Coogee Beach", -33.923036, 151.259052, 5],
        ["Cronulla Beach", -34.028249, 151.157507, 3],
        ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
        ["Maroubra Beach", -33.950198, 151.259302, 1],
      ]
      for (let i = 0; i < recordings.length; i++) {
        const recording = recordings[i]
        
        const marker = new google.maps.Marker({ 
            position: { lat: recording[1], lng: recording[2] }, 
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "#E74C3C",
                fillOpacity: 1.0,
                fillOpacity: 0.6,
                strokeColor: "#ffffff",
                strokeOpacity: 0.5,
                strokeWeight: 10,
                scale: 10,
              },
            title: recording[0]
        })

        marker.addListener("click", () => {router.push(`/?recording=${recording[0]}`,`/r/${recording[0]}`)});}
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
      <div className="bottom-12 right-12 fixed w-8 space-y-4">
          <div className="w-8 h-8">
            <button onClick={() => handleZoomUpdate(1)}><ZoomIn/></button>
          </div>
          <div className="w-8 h-8">
            <button onClick={() => handleZoomUpdate(-1)} disabled={value < 1}><ZoomOut/></button>
          </div>
      </div>
    </div>
  )
}