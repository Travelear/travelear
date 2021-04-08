// import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
// import Link from 'next/link'
import Player from '../components/player'
// import { FlapDisplay, Presets } from 'react-split-flap-effect'
import axios from 'axios';
var QRCode = require('qrcode.react')

const RecordingPage = () => {

  const [entry, setEntry] = useState();
  const router = useRouter()
  const { recording } = router.query

  useEffect(async () => {
    const res = await axios.get(`/api/recording/${recording}`);
    console.log(res)
    setEntry(res.data);
  }, []);

  if (router.isFallback) {
    return (
      <div>loading</div>
    )
  } else {
    if (entry) {
      return (
        <div className="w-full h-full">
            <div className="flex flex-wrap text-black font-departures border-black border-1">
                <div className="w-full flex flex-row justify-between items-center bg-travello space-x-4 p-4">
                    <div className="w-128">
                        <QRCode value="http://www.thetravelear.com" bgColor="#fbbf24" fgColor="#000000"/>
                    </div>
                    <div className="w-full text-xs">
                        <div><p>{entry.name}</p></div>
                        <div><p>{entry.latitude},{entry.longitude}</p></div>
                    </div>
                </div>
                <div className="w-full flex">
                        <Player/>
                </div>
            </div>
        </div>
      );
    } else {
      return (
        <div>not found</div>
      )
    }
  }
};

export default RecordingPage;