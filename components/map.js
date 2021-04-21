import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { useGoogleMaps } from "react-hook-google-maps"
import ZoomOut from './svgs/zoom-out'
import ZoomIn from './svgs/zoom-in'
import axios from 'axios'

export default function Map(){

    const router = useRouter()

    const [entries, setEntries] = useState([]);
    const [value, setValue] = useState(0);
    const { ref, map, google } = useGoogleMaps(process.env.NEXT_PUBLIC_MAP_API_KEY, {
        center: {
        lat: 37.7749, 
        lng: 122.4194
        },
        zoom: 15,
        minZoom:5,
        maxZoom:20,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c7c7c7"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#a9d8ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2dccd"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a9d8ae"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 99
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#808080"
                    },
                    {
                        "lightness": 54
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#767676"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#e7e7e7"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": 43
                    },
                    {
                        "lightness": -11
                    },
                    {
                        "hue": "#0088ff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#66cae1"
                    }
                ]
            }
        ],
    disableDefaultUI: true,
  });

  useEffect(async () => {
    if (!map) {
    return;
    }
    // GET DATA
    const res = await axios.get('/api/posts');
    setEntries(res.data.entriesData);

    // ZOOM LISTENER
    setValue(map.getZoom());
    const listener = map.addListener("zoom_changed", () => {
    setValue(map.getZoom());
    }, {passive:true});

    return () => google.maps.event.removeListener(listener);
}, [map, google]);

  if (map) {
      for (let i = 0; i < entries.length-1; i++) {
        const post = entries[i]
        const marker = new google.maps.Marker({ 
            position: { lat: Number(post.latitude), lng: Number(post.longitude) }, 
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "#E74C3C",
                fillOpacity: 1.0,
                fillOpacity: 1.0,
                strokeColor: "#e73c57",
                strokeOpacity: .05,
                strokeWeight: 10,
                scale: 10,
              },
            title: post[0]
        })
            marker.addListener("click", () => {router.push(`/?postId=${post.id}`,`/posts/${post.id}`)}, {
                passive: true
              });
        }
    }
    
    const handleZoomUpdate = (zoomChange = 1) => {
        const nextZoom = value + zoomChange;
        if (nextZoom < 0) {
        return;
        }
        map.setZoom(nextZoom);
    };

    // const centerOnUser = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //           (position) => {
    //             const pos = {
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude,
    //             };
    //             map.setCenter(pos);

    //           },() => {console.log('error');}
    //     )}
    // }

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