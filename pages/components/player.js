import {useState} from 'react'
import Slider from 'react-rangeslider'

export default function Player() {

    let [state, setState] = useState({
      volume: 100,
    })

    const onVolumeChange = (volume) => {
      setState({...state,volume: volume})
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
      <div className="w-full pointer-events-auto">
          <div className="h-full">
            <Slider
            orientation="vertical"
            value={state.volume}
            onChange={onVolumeChange}
            />
          </div>
          <div className="h-50 w-50">
            <button type="button" className="mx-auto">
              <svg width="50" height="50" fill="none">
                <circle className="text-white" cx="25" cy="25" r="24" fill="white"/>
                <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="black" />
              </svg>
            </button>
          </div>
    </div>
    )
}