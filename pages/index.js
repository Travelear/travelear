import {useState} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Map from './components/map'
import ProfilePage from './profiles/[profile]'
import RecordingPage from './recordings/[record]'
import TimeSlider from './components/audio-slider'
import Modal from 'react-modal'
import Link from 'next/link'

// import VolumeUp from './components/svgs/volume-up'
// import VolumeDown from './components/svgs/volume-down'

import PlayButton from './components/svgs/play'


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

        <div className="top-16 right-0 fixed space-y-2">

          <div className="rounded-l-full bg-white shadow-xl">
              <div className="p-2 flex">
                <div className="center-items cursor-pointer">
                      <Link 
                        href={`/?profile=${profile}`} 
                        as={`/p/${profile}`}>
                            <div className="flex-none w-16 h-16 p-2 relative">
                                <img className="absolute inset-0 w-full h-full rounded-full object-cover" src={"https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/image%2F%24747021f5-a18d-495b-998d-87f8cb750d35-garett-with-mic-for-travelear-pic.jpg?alt=media&token=4c028c02-8214-45f9-8f6a-4479580a8354"}/>
                            </div>
                      </Link>
                </div>
              </div>
          </div>
        </div>

        <div className="bottom-16 left-0 fixed ">
          <div className="flex items-center space-x-8">
            <div className="space-y-2">
              <div className="rounded-r-full bg-white shadow-xl">
                <div className="p-2 flex">
                  <div className="center-items cursor-pointer">
                    <Link 
                        href={`/?recording=${recording}`} 
                        as={`/r/${recording}`}>
                          <div className="flex-none w-16 h-16 p-2 relative">
                              <img className="absolute inset-0 w-full h-full rounded-full object-cover" src={"https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Fimages%2FElephant-Seal-Beach_San-Simeon-California_192_020417.jpg?alt=media&token=6a8d0454-0626-4a75-8c20-512e59d1d278"}/>
                          </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-r-full bg-white shadow-xl">
                  <div className="p-2 flex">
                    <div className="center-items cursor-pointer">
                      <button type="button" className="flex-none w-16 h-16 p-2 relative">
                          <PlayButton/>
                      </button>
                    </div>
                  </div>
              </div>
            </div>
            <div className="ml-8 m-8">
            <TimeSlider/>
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