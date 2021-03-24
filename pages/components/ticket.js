import {useState} from 'react'
import Slider from 'react-rangeslider'

export default function Ticket() {

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

  return(
    <div>
      <div className="ml-4">
        <Slider
        orientation="horizontal"
        value={state.currentTime}
        onChange={onCurrentTimeChange}
        />
      </div>
      <div className="w-full flex justify-center pointer-events-none">
          <div className="pointer-events-auto flex flex-wrap bg-white shadow-lg ">
            <div className="hidden sm:block flex-none w-48 relative">
              <img className="absolute inset-0 w-full h-full object-cover " src="https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Fimages%2FElephant-Seal-Beach_San-Simeon-California_192_020417.jpg?alt=media&token=6a8d0454-0626-4a75-8c20-512e59d1d278" alt="" class="absolute inset-0 w-full h-full object-cover" />
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
                    <p className="hidden sm:block text-black text-xs font-regular uppercase">
                      Garett Martocello
                    </p>
                </div>
            </div>
          </div>
      </div>
    </div>
        
    )
}