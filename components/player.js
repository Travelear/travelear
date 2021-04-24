import React, { useRef, useEffect, useState } from "react"
import Link from 'next/link'
import PlayButton from './svgs/play'
import BookMark from './svgs/bookmark'
import VolumeUp from './svgs/volume-up'
import VolumeDown from './svgs/volume-down'
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

  const onEnded = (id) => {
    audio.play()
  }

  const startTimer = () => {
    setState({
      timerOn: true,
      timerTime: state.timerTime,
      timerStart: state.timerTime
    });
    timer = setInterval(() => {
      const newTime = state.timerTime - 10;
      if (newTime >= 0) {
        setState({
          timerTime: newTime
        });
      } else {
        clearInterval(timer);
        setState({ timerOn: false });
        alert("ended");
      }
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timer);
    setState({ timerOn: false });
  };
  const resetTimer = () => {
    if (state.timerOn === false) {
      setState({
        timerTime: state.timerStart
      });
    }
  };

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

  const adjustTimer = (input) => {
    const { timerTime, timerOn } = state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  const { timerTime, timerStart, timerOn } = state;
  let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

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

  return (
    <div className="w-full h-full text-black">
        <div className="flex flex-wrap justify-center items-center">
              <div className="w-full h-12 flex justify-center items-center px-4">
                <div className="w-full">
                  <SliderInput min={0} max={100} step={1} orientation={"horizontal"} value={state.currentTime} onChange={onCurrentTimeChange}>
                      <SliderTrack className="slider-track">
                        <SliderRange className="slider-range"/>
                        <SliderHandle className="slider-handle"/>
                      </SliderTrack>
                  </SliderInput>
                </div>
              </div>
              <div className="w-full flex flex-row h-16 items-center justify-between px-4 pb-4">
                <div>
                  <p>{hours}:{minutes}:{seconds}</p>
                </div>
                <div className="w-16 h-16 font-bold center-items cursor-pointer" onClick={handlePlay}>
                  {state.isPlaying ? <PlayButton/>: <PlayButton/>}
                </div>
                <div>
                  <p>{hours}:{minutes}:{seconds}</p>
                </div>
              </div>
        </div>
        {props.file && <audio
          onEnded={() => onEnded(props.id)}
          ref={audioRef => audio = audioRef}
          src={props.file}
          autoPlay={false}
        />}
    </div>
  );
}