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


const testFile = 'https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Faudio%2FElephant-Seal-Beach_San-Simeon-California_192_020417.mp3?alt=media&token=e7774d74-6151-42ef-b526-91ec7d51c5a5'

export default function Player(){

  const [state, setState] = useState({
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    currentTime: 0,
  })

  const profile = '1234'
  const post = '1234'

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
                <div className="w-16 h-16 font-bold center-items cursor-pointer">
                  <PlayButton/>
                </div>
                <div>
                  <p>{hours}:{minutes}:{seconds}</p>
                </div>
              </div>
        </div>
    </div>
  );
}