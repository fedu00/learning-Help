import { useState } from "react";
import "./PomodorePageStyles.css";
import { useDispatch } from "react-redux";
import { createPomodoro } from "../../store";
import { WORK_DATA, BREAK_DATA, INTERVALS_DATA } from "./PomodorePageData";

const PomodorePage = (props) => {
  const dispatch = useDispatch();
  const [pomodoreData, setPomodoreData] = useState({
    workTime: 0,
    breakTime: 5,
    numberOfIntervals: 5,
  });

  const handleClick = () => {
    dispatch(
      createPomodoro({
        workTime: pomodoreData.workTime,
        breakTime: pomodoreData.breakTime,
        numberOfIntervals: pomodoreData.numberOfIntervals,
        workON: true,
      })
    );
  };

  const handlerSelect = (e, lala) => {
    switch (lala) {
      case "minuty":
        setPomodoreData((prevValue) => {
          return {
            ...prevValue,
            workTime: parseInt(e.target.value),
          };
        });
        break;
      case "sekundy":
        setPomodoreData((prevValue) => {
          return {
            ...prevValue,
            breakTime: parseInt(e.target.value),
          };
        });
        break;
      case "interwaly":
        setPomodoreData((prevValue) => {
          return {
            ...prevValue,
            numberOfIntervals: parseInt(e.target.value),
          };
        });
        break;
      default:
        console.log("err");
        break;
    }
  };

  return (
    <div className="section-container">
      <div className="pomodore-container">
        <p>Plan your work for today!</p>
        <div className="timer-container">
          <select
            value={pomodoreData.workTime}
            onChange={(e) => handlerSelect(e, "minuty")}
          >
            {WORK_DATA.map((element) => (
              <option
                value={element.value}
              >{`${element.value} minutes work`}</option>
            ))}
          </select>
          <select
            value={pomodoreData.breakTime}
            onChange={(e) => handlerSelect(e, "sekundy")}
          >
            {BREAK_DATA.map((element) => (
              <option
                value={element.value}
              >{`${element.value} minutes break`}</option>
            ))}
          </select>
          <select
            value={pomodoreData.numberOfIntervals}
            onChange={(e) => handlerSelect(e, "interwaly")}
          >
            {INTERVALS_DATA.map((element) => (
              <option
                value={element.value}
              >{`${element.value} intervals`}</option>
            ))}
          </select>
        </div>
        <div className="timer-buttons-container">
          <button onClick={handleClick}>START WORK</button>
        </div>
      </div>
    </div>
  );
};

export default PomodorePage;
