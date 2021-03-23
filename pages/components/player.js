import {useState} from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default function Player() {

    let [state, setState] = useState({
      volume: 100,
      currentTime: 0
    })

    const onVolumeChange = (volume) => {
      setState({...state,volume: volume})
    }

    const onCurrentTimeChange = (currentTime) => {
      setState({...state, currentTime: currentTime})
    }

    return (
      <div className="bottom-8 fixed w-full flex justify-center pointer-events-none">
      <div className="space-x-4 pointer-events-auto flex flex-row justify-between">

        <div className="m-6 bg-white rounded-lg shadow-lg flex flex-row">
          <div className="flex-none w-48 relative">
            <img className="absolute inset-0 w-full h-full object-cover rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Fimages%2FElephant-Seal-Beach_San-Simeon-California_192_020417.jpg?alt=media&token=6a8d0454-0626-4a75-8c20-512e59d1d278" alt="" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-3/4 mx-4 p-4 h-full">
          <div className="space-y-1.5 pb-2">
              <h2 className="hidden sm:block text-black text-sm font-semibold uppercase">
                Elephant Seal Beach 
              </h2>
              <p className="hidden lg:block text-black text-sm font-regular">
                By Garett Martocello
              </p>
              <p className="hidden lg:block text-black text-xs font-regular uppercase">
                35.661964 : -121.25528
                San Simeon, CA USA
              </p>
              <p className="hidden lg:block text-black text-xs font-regular uppercase">
                January 20 2021 9:00am PST
              </p>
          </div>
          <div className="hidden lg:block p-2">
            <Slider
              min={0}
              max={100}
              tooltip={false}
              value={state.currentTime}
              orientation='horizontal'
              onChange={onCurrentTimeChange}
            />
            <div class="lg:block text-gray-500 dark:text-gray-400 flex justify-between text-sm font-medium tabular-nums">
              <div>{state.currentTime}</div>
              <div>75:50</div>
            </div>
          </div>
          <div>
            <div className="h-50 w-50">
              <button type="button" className="mx-auto">
                <svg width="50" height="50" fill="none">
                  <circle className="text-gray-300 dark:text-gray-500" cx="25" cy="25" r="24" fill="white" stroke="black"/>
                  <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
          </div>
        </div>

        <div className="hidden lg:block pr-8 py-8">
          <Slider
              min={0}
              max={100}
              tooltip={false}
              value={state.volume}
              orientation='vertical'
              onChange={onVolumeChange}
            />
            <div className='w-8'>{state.volume}</div>
        </div>

      </div>
    </div>
    )
}