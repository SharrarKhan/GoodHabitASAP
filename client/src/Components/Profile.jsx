import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import SingleHabitInfo from "../Components/SingleHabitInfo";
import axios from "axios";

let initialTempVar;
let finalTempVar;
const ProfilePage = (props) => {
  //console.log("props in profile page:", props);
  const [listOfHabitsToDevelop, setListOfHabitsToDevelop] = useState([]);
  const [listOfHabitsToDevelopElements, setListOfHabitsToDevelopElements] = useState([]);
  //const [listOfHabitsToDoToday, setListOfHabitsToDoToday] = useState([]);
  //const [listOfHabitsToDoTodayElements, setListOfHabitsToDoTodayElements] = useState([]);


  useEffect(() => {
    console.log("USEEFFECT IN PROFILE.JSX IS STARTING");
    let ignore = false;
    let tempGlobalVarArr = [];

    const fetchData = async () => {
      console.log("inside fetchData function");
      try {
          let tempInsideFetch;
          let habitsToDevelopData = await axios.get("/habits/");
          let habits = [...habitsToDevelopData.data.payload];
          console.log("listOfHabitsToDevelop BEFORE the splice:", listOfHabitsToDevelop);
          initialTempVar = listOfHabitsToDevelop.splice(0, listOfHabitsToDevelop.length, ...habits);
          tempInsideFetch = initialTempVar;
          finalTempVar = tempInsideFetch;
          //setListOfHabitsToDevelop(tempInsideFetch.splice(0, tempInsideFetch.length, ...habits));
          //console.log("listOfHabitsToDevelop in useEffect:", listOfHabitsToDevelop)
          if(!ignore) {
            //tempGlobalVarArr = listOfHabitsToDevelop.splice(0, listOfHabitsToDevelop.length, ...listOfHabitsToDevelop);
            let arrHoldingHtmlElements = [];
            for(let i = 0; i < listOfHabitsToDevelop.length; i++) {
              arrHoldingHtmlElements.push(
                <div className="profileListOfHabitsToDevelopElementsContainer">
                  <p>{listOfHabitsToDevelop[i].habit_name}</p>
                </div>
              )
            }
          }
          console.log("listOfHabitsToDevelop AFTER the splice:", listOfHabitsToDevelop);
          setListOfHabitsToDevelop(tempInsideFetch.splice(0, tempInsideFetch.length, ...habits));


      } catch (err) {
          console.log("ERROR:", err);
      }
    }

    fetchData();
    return () => { ignore = true; }
  
  }, []);

  return(
    <>
    {console.log("RENDER IS STARTING")}
      <div id="profileHeaderTagContainer" className="divsInProfile">
        <h1 id="profileHeaderTag">My Profile</h1>
      </div>
      <div id="habitsIWantToDevelopContainer" className="divsInProfile">
        <div className="profileDivsTopTextElement">
          <h5 id="habitsIWantToDevelopHTag">Habits that I want to develop!</h5>
        </div>
        <div>
          <div>
          {
            console.log("finalTempVar BEFORE the conditional:", finalTempVar),
            (finalTempVar)
              ?(
                finalTempVar.map(element => { 
                  return(
                    <div className="habitWantToDevelopItem" key={element.id}>
                      <Link to={`/SingleHabitInfo/${element.id}`} className="textOfHabitWantToDevelopItem"><p className="pTagOfHabitsIWantToDevelop">{element.habit_name}</p></Link>
                    </div>
                  ) 
                }
               )
              ): null              
          }
          </div>
        </div>
      </div>
      <div id="habitsToDoTodayContainer" className="divsInProfile">
        <div className="profileDivsTopTextElement">
          <p id="habitsToDoTodayPTag">Habits to do today</p>
        </div>
        <div>
            <p>List them here</p>
        </div>
      </div>
      { console.log("finalTempVar AFTER the conditional:", finalTempVar) }
    </>
  );
}

export default ProfilePage;