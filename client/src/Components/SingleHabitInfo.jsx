import React, { useState, useEffect } from "react";
import "../App.css";
import Profile from "../Components/Profile";
import axios from "axios";

const SingleHabitInfo = (props) => {
  //console.log("props.match.params.id in SingleHabitInfo.jsx:", props.match.params.id);
  const [data, setData] = useState("");
  useEffect(() => {
    console.log("USEEFFECT IN SINGLEHABITINFO.JSX IS STARTING");
    const fetchData = async () => {
      let habit = await axios.get(`/habits/habit_info/${props.match.params.id}`);
      //console.log("habit:", habit);
      setData(habit.data.payload[0]);
    }
    fetchData();
  }, []);

  console.log("data:", data);
  return(
    <>
      <div id="habitNameDivInSingleHabitInfo">
        <h3 className="hTagsInSingleHabitInfo">Habit:</h3>
        <p className="pTagsInSingleHabitInfo">{data.habit_name}</p>
      </div>

      <div id="habitDescriptionDivInSingleHabitInfo">
        <h3>Description:</h3>
        <p className="pTagsInSingleHabitInfo">{data.description}</p>
      </div>
    </>
  )

}

export default SingleHabitInfo;