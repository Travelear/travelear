import React, { useState } from "react"
import PlayButton from './svgs/play'
import PauseButton from './svgs/pause'
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";
import "@reach/slider/styles.css";


export default function Player(props){

  let audio = null

  const [state, setState] = useState({
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    currentTime: 0,
    isPlaying: false
  })

  const onEnded = () => {
    audio.play()
  }

  const onTimeUpdate = (e) => {
    setState({
      ...state, 
      currentTime: Math.floor(e.target.currentTime)
    })
  }

  const onTimeSliderChange = (nextTime) => {
      audio.currentTime = nextTime
  }

  const timeToSeconds = (str) => {
    if (str){
      var p = str.split(':'),
      s = 0, m = 1;
      while (p.length > 0) {
          s += m * parseInt(p.pop(), 10);
          m *= 60;
      }
      return s;
    }
    return 0
  }

  const handlePlay = () => {
    if (audio.paused) {
      audio.play()
      setState({
        ...state,
        isPlaying:true
      })
    } else {
      audio.pause();
      setState({
        ...state,
        isPlaying:false
      })
    }
  }

  const secondsToTime = (time) => {
    return `${Math.floor((time % 3600) / 60)}:${Math.floor(time % 60)}`
  }

  return (
    <div className="w-full h-full text-black">
        <div className="flex flex-wrap justify-center items-center">
              <div className="w-full h-12 flex justify-center items-center px-4">
                <div className="w-full">
                  <SliderInput min={0} max={timeToSeconds(props.duration)} step={1} orientation={"horizontal"} value={state.currentTime} onChange={onTimeSliderChange}>
                      <SliderTrack className="slider-track">
                        <SliderRange className="slider-range"/>
                        <SliderHandle className="slider-handle"/>
                      </SliderTrack>
                  </SliderInput>
                </div>
              </div>
              <div className="w-full flex flex-row h-16 items-center justify-between px-4 pb-4">
                <div className="w-16">
                  <p>{secondsToTime(state.currentTime)}</p>
                </div>
                <div className="w-16 h-16 font-bold center-items cursor-pointer" onClick={handlePlay}>
                  {state.isPlaying ? <PauseButton/>: <PlayButton/>}
                </div>
                <div className="w-16">
                  <p>{props.duration}</p>
                </div>
              </div>
        </div>
        {props.file && <audio
          onTimeUpdate={onTimeUpdate}
          ref={audioRef => audio = audioRef}
          src={props.file}
          autoPlay={false}
        />}
    </div>
  );
}