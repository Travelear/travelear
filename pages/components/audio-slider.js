import React, { useRef, useEffect, useState } from "react"

const testFile = 'https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Faudio%2FElephant-Seal-Beach_San-Simeon-California_192_020417.mp3?alt=media&token=e7774d74-6151-42ef-b526-91ec7d51c5a5'

export default function TimeSlider(){

  const [state, setState] = useState({
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  })

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
        alert("Countdown ended");
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
    <div className="bg-white shadow-sm rounded-lg">
      <div className="Countdown p-2">
        <div className="Countdown-display">
          <button onClick={() => adjustTimer("incHours")}>&#8679;</button>
          <button onClick={() => adjustTimer("incMinutes")}>
            &#8679;
          </button>
          <button onClick={() => adjustTimer("incSeconds")}>
            &#8679;
          </button>

          <div className="Countdown-time font-bold text-5xl">
            {hours} : {minutes} : {seconds}
          </div>

          <button onClick={() => adjustTimer("decHours")}>&#8681;</button>
          <button onClick={() => adjustTimer("decMinutes")}>
            &#8681;
          </button>
          <button onClick={() => adjustTimer("decSeconds")}>
            &#8681;
          </button>
        </div>

        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="Button-start" onClick={startTimer}>
            Start
          </button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className="Button-stop" onClick={stopTimer}>
            Stop
          </button>
        )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button className="Button-start" onClick={startTimer}>
              Resume
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button className="Button-reset" onClick={resetTimer}>
              Reset
            </button>
          )}
      </div>
    </div>
  );
}