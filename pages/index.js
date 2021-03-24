import Head from 'next/head'
import {useEffect, useRef} from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import Player from './components/player'
import Ticket from './components/ticket'
import Navigation from './components/navigation'
import { style }  from './components/map'

export default function Home() {

  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: '#',
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: {lat: 39.1760737, lng: 23.4324934},
        zoom: 10,
        minZoom:5,
        maxZoom:10,
        styles: style,
        disableDefaultUI: true,
      });
    });
  });

  return (
    <div className="flex justify-center min-h-screen">
      <Head>
        <title>Travelear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="justify-center flex-1 text-center">
        <div className="w-full h-full">
          <div id="map" ref={googlemap} />
        </div>
        <div className="top-16 right-0 fixed">
          <Navigation/>
        </div>
        <div className="bottom-8 left-0 fixed cursor-pointer">
          <Ticket/>
        </div>
        <div className="bottom-8 right-8 fixed">
          <Player/>
        </div>
      </main>
    </div>
  )
}