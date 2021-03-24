import { useRouter } from 'next/router'
import Link from 'next/link'
import {useState} from 'react'
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";
import "@reach/slider/styles.css"
import Modal from 'react-modal'

Modal.setAppElement("#__next")

export default function Ticket() {

  const router = useRouter()
  let [state, setState] = useState({
    currentTime: 0
  })

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

  
  const recording = '1234'

  return(
    <div>
      <div className="w-full p-6">
        <SliderInput min={0} max={100} step={1} orientation={"horizontal"} value={state.volume} onChange={onCurrentTimeChange}>
          <SliderTrack className="slider-track">
            <SliderRange className="slider-range"/>
            <SliderHandle className="slider-handle"/>
          </SliderTrack>
        </SliderInput>
      </div>

      <Link 
        href={`/?recording=${recording}`} 
        as={`/recordings/${recording}`}>
      <div className="w-full flex justify-center pointer-events-none">
          <div className="pointer-events-auto flex flex-wrap bg-white shadow-lg ">
            <div className="hidden sm:block flex-none w-48 relative">
              <img className="absolute inset-0 w-full h-full object-cover " src="https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Fimages%2FElephant-Seal-Beach_San-Simeon-California_192_020417.jpg?alt=media&token=6a8d0454-0626-4a75-8c20-512e59d1d278" alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="border-dotted border-4 p-2 m-2 flex flex-row">
                <div className="p-2">
                    <h2 className="text-black text-xs font-semibold uppercase truncate">
                      Elephant Seal Beach 
                    </h2>
                    <p className="hidden sm:block text-black text-xs font-regular uppercase">
                      35.661964 : -121.25528
                      San Simeon, CA USA
                    </p>
                    <p className="hidden sm:block text-black text-xs font-regular uppercase">
                      January 20 2021 9:00am PST
                    </p>
                    <p className="hidden sm:block text-black text-xs font-regular underline">
                      By Garett Martocello
                    </p>
                </div>
            </div>
          </div>
      </div>
      </Link>

      <Modal 
        isOpen={!!router.query.recording}
        onRequestClose={() => router.push("/")}>
          <div>
            in the recording modal {router.query.recording}
          </div>
      </Modal>

    </div>
        
    )
}