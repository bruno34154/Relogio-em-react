import { useState, useEffect } from "react";
import "./style.css";

export default function Clock() {
  const date = new Date();
  const [seconds, setSeconds] = useState(date.getSeconds());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [hours, setHours] = useState(date.getHours());
  let time = `${hours}:${minutes}:${seconds}`;
  useEffect(() => {
    document.title = "Horario local";
    const interval = setInterval(clocktime, 1000);

    return () => clearInterval(interval);
  });

  function clocktime() {
    setSeconds(seconds + 1);

    if (seconds === 59) {
      setSeconds(0);

      setMinutes(minutes + 1);
    }
    if (minutes === 59) {
      setMinutes(0);

      setHours(hours + 1);
    }
    if (hours === 24) {
      setHours(0);
    }
  }
  if (seconds < 10 && minutes < 10 && hours < 10) {
    time = `0${hours}:0${minutes}:0${seconds}`;
  } else if (seconds < 10 && minutes < 10) {
    time = `${hours}:0${minutes}:0${seconds}`;
  } else if (minutes < 10 && hours < 10) {
    time = `0${hours}:0${minutes}:${seconds}`;
  } else if (seconds < 10 && hours < 10) {
    time = `0${hours}:${minutes}:0${seconds}`;
  } else if (seconds < 10) {
    time = `${hours}:${minutes}:0${seconds}`;
  } else if (minutes < 10) {
    time = `${hours}:0${minutes}:${seconds}`;
  } else if (hours < 10) {
    time = `0${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="container-clock">
      <input className="input-clock" value={time} readOnly></input>
    </div>
  );
}
