import {useState} from 'react'
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";
import "@reach/slider/styles.css";
import Headphones from './svgs/headphones'

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

          <div className="flex flex-col justify-center items-center mb-6">
            <div className="w-10 h-10">
              <Headphones/>
            </div>
            <div>
              <SliderInput min={0} max={100} step={1} orientation={"vertical"} value={state.volume} onChange={onVolumeChange}>
                <SliderTrack className="slider-track">
                  <SliderRange className="slider-range"/>
                  <SliderHandle className="slider-handle"/>
                </SliderTrack>
              </SliderInput>
            </div>
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