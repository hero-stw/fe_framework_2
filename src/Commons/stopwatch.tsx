import React, { useEffect, useState } from "react";
import { avgOfArray } from ".";

type Props = {};

const StopWatch = (props: Props) => {
  const [lap, setLap] = useState<number[]>([]);

  const [start, setStart] = useState<number>(0);

  const [duration, setDuration] = useState<number>(0);
  // const [clock, setClock] = useState<string>("");
  const Start = () => {
    setStart(Date.now());
    console.log("Start!");
  };
  const Lap = () => {
    if (lap.length <= 4) {
      // Hiển thị thời gian đã làm dạng mm:ss:msms
      const lapText = new Date(Date.now() - start);
      // Tính toán thời gian đã làm
      const lapNum = Date.now() - start;

      // Tính khoảng tgian User làm 1 câu => Set vào State Duration
      setDuration(Date.now() - start);
      console.log(duration);

      setLap([...lap, lapNum]);
      setStart(Date.now());
      console.log(
        "Lap: ",
        lapText.getMinutes() +
          ":" +
          lapText.getSeconds() +
          ":" +
          lapText.getMilliseconds()
      );
    } else {
      console.log("Lap Array: ", lap);
      console.log("Time average: ", Math.ceil(avgOfArray(lap)));
    }
  };
  // useEffect(()=> {
  //   setClock()
  // },[clock])

  return (
    <div>
      <h1>StopWatch</h1>
      {/* <div className="text-black text-2xl">{clock}</div> */}
      <button className="bg-gray-500 px-4 py-2" onClick={Start}>
        Start
      </button>
      <button className="bg-gray-500 px-4 py-2" onClick={Lap}>
        Lap
      </button>
      <div className="history">
        <ul>
          {lap.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StopWatch;
