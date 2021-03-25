import {useState} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Map from './components/map'
import ProfilePage from './profiles/[profile]'
import RecordingPage from './recordings/[record]'
import Modal from 'react-modal'
import TravelearMark from './components/svgs/travelear-mark'
import Link from 'next/link'
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";
import "@reach/slider/styles.css";

import PlayButton from './components/svgs/play'
import VolumeUp from './components/svgs/volume-up'
import VolumeDown from './components/svgs/volume-down'

Modal.setAppElement("#__next")

export default function Home() {

  const router = useRouter()
  const profile = '1234'
  const recording = '1234'

  let [state, setState] = useState({
    volume: 100,
    currentTime: 0
  })

  const onVolumeChange = (volume) => {
    setState({...state, volume: volume})
  }

  const onCurrentTimeChange = (currentTime) => {
    setState({...state, currentTime: currentTime})
  }

  const timeToSeconds = (str) => {
    var p = str.split(':'),
        s = 0, m = 1;
    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    return s;
  }

  return (
    <div className="flex justify-center min-h-screen">
      <Head>
        <title>Travelear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex">
        <div className="w-full h-full">
          <Map/>
        </div>

                    {/* <div className="m-2 px-2">
                <div className="cursor-pointer text-lg font-regular">
                    <Link 
                        href={`/?profile=${profile}`} 
                        as={`/profiles/${profile}`}>
                            <div className="w-full p-2">
                                Profile
                            </div>
                    </Link>
                </div>
            </div> */}
        <div className="top-8 right-0 rounded-l-3xl fixed bg-white shadow-2xl">
            <div className="p-2 flex">
              <div className="center-items cursor-pointer">
                <Link 
                href={'/'}>
                    <div className="w-16 h-16 p-2">
                      <TravelearMark/>
                    </div>
                </Link>
              </div>
            </div>
        </div>

        {/* <div className="top-8 left-0 w-3/4 rounded-r-3xl fixed bg-white shadow-2xl">
          <div className="p-2 flex">
            <div className="center-items cursor-pointer">
                <Link 
                    href={`/?recording=${recording}`} 
                    as={`/recording/${recording}`}>
                      <div className="flex-none w-16 h-16 p-2 relative">
                        <img className="absolute inset-0 w-full h-full rounded-lg object-cover" src="https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Fimages%2FElephant-Seal-Beach_San-Simeon-California_192_020417.jpg?alt=media&token=6a8d0454-0626-4a75-8c20-512e59d1d278" alt="" />
                      </div>
                </Link>
              </div>
            </div>
        </div> */}

        <div className="fixed left-16 bottom-16 flex">
          <div className="h-full w-full p-6 flex justify-center space-x-6 bg-white shadow-2xl rounded-3xl">
            <div className="w-full space-y-6">
              <div className="w-32">
                <SliderInput min={0} max={100} step={1} orientation={"horizontal"} value={state.currentTime} onChange={onCurrentTimeChange}>
                  <SliderTrack className="slider-track">
                    <SliderRange className="slider-range"/>
                    <SliderHandle className="slider-handle"/>
                  </SliderTrack>
                </SliderInput>
              </div>
              <div className="h-16 w-16">
                <button type="button" className="">
                  <PlayButton/>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="w-8 h-8">
            <VolumeUp/>
            </div>
            <div className="w-8 h-8">
            <VolumeDown/>
            </div>
          </div>
        </div>


      </main>
      <Modal
        style={{content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }}}
        isOpen={!!router.query.profile}
        onRequestClose={() => router.push("/")}>
          <ProfilePage/>
      </Modal>
      <Modal
        style={{content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }}} 
        isOpen={!!router.query.recording}
        onRequestClose={() => router.push("/")}>
          <RecordingPage/>
      </Modal>
    </div>
  )
}