import React, { useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from "axios";

const AddHabitForm = props => {
    const [habitInputValue, setHabitInputValue] = useState("");
    const [sundayCheckbox, setSundayCheckbox] = useState(false);
    const [mondayCheckbox, setMondayCheckbox] = useState(false);
    const [tuesdayCheckbox, setTuesdayCheckbox] = useState(false);
    const [wednesdayCheckbox, setWednesdayCheckbox] = useState(false);
    const [thursdayCheckbox, setThursdayCheckbox] = useState(false);
    const [fridayCheckbox, setFridayCheckbox] = useState(false);
    const [saturdayCheckbox, setSaturdayCheckbox] = useState(false);
    const [triggersToAvoidValue, setTriggersToAvoidValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("");
    const [submittedButtonValue, setSubmittedButtonValue] = useState(false);
    const [checkedDays, setCheckedDays] = useState({});

    const handleHabitInputChange = (e) => {
        let inputValue = habitInputValue;
        setHabitInputValue(e.target.value)
    }

    const handleSundayCheckboxInputChange = (e) => {
        let inputValue = !sundayCheckbox;
        setSundayCheckbox(inputValue);
        let obj = {...checkedDays};
        obj[0] = inputValue;
        setCheckedDays(obj);
    }

    const handleMondayCheckboxInputChange = () => {
        let inputValue = !mondayCheckbox;
        setMondayCheckbox(inputValue);
        let obj = {...checkedDays};
        obj[1] = inputValue;
        setCheckedDays(obj);
    }

    const handleTuesdayCheckboxInputChange = () => {
        let inputValue = !tuesdayCheckbox;
        setTuesdayCheckbox(inputValue);
        let obj = {...checkedDays};
        obj[2] = inputValue;
        setCheckedDays(obj);
    }

    const handleWednesdayCheckboxInputChange = () => {
        let inputValue = !wednesdayCheckbox;
        setWednesdayCheckbox(inputValue);
        let obj = {...checkedDays};
        obj[3] = inputValue;
        setCheckedDays(obj);
    }

    const handleThursdayCheckboxInputChange = () => {
        let inputValue = !thursdayCheckbox;
        setThursdayCheckbox(inputValue);
        let obj = {...checkedDays};
        obj[4] = inputValue;
        setCheckedDays(obj);
    }

    const handleFridayCheckboxInputChange = () => {
        let inputValue = !fridayCheckbox;
        setFridayCheckbox(inputValue);
        let obj = {...checkedDays};
        obj[5] = inputValue;
        setCheckedDays(obj);
    }

    const handleSaturdayCheckboxInputChange = () => {
        let inputValue = !saturdayCheckbox;
        setSaturdayCheckbox(inputValue);
        let obj = {...checkedDays};
        obj[6] = inputValue;
        setCheckedDays(obj);
    }

    const handleTriggersToAvoidInputChange = (e) => {
        setTriggersToAvoidValue(e.target.value);
    }

    const handleDescriptionInputChange = (e) => {
        setDescriptionValue(e.target.value);
    }

    const addHabit = async () => {
        const reqBody = {
            habit_name: habitInputValue, 
            description: descriptionValue,
            created_at: Math.floor(Date.now() / 1000), // timestamp in seconds
            triggers_to_avoid: triggersToAvoidValue,
        }

        console.log("addHabit reqBody:", reqBody)

        let data = await axios.post("http://localhost:4000/habits/", reqBody);
        console.log("Making POST request. Adding a habit to the db");
        console.log("addHabit data:", data);
    }

    let something = [];

    for(let i in checkedDays) { // push the keys that are true
        if(checkedDays[i]) {
            something.push(i); // now can map thru it later
        }
    }

    //console.log("props:", props);

    return (
        <div>
            <form>
                <div className="addHabitInputDivs form-group">
                    <label for="exampleFormControlInput1">Habit</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Study DSA" 
                        onChange={handleHabitInputChange}
                        required
                    />
                </div>
                <div className="addHabitInputDivs form-group">
                <p>Days of the week (24 Hour Format)</p>
                <div id="daysOfTheWeekCheckboxesContainer">
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox1" 
                            value="option1" 
                            onChange={handleSundayCheckboxInputChange}
                        />
                        <label className="form-check-label" for="inlineCheckbox1">S</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox2" 
                            value="option2" 
                            onChange={handleMondayCheckboxInputChange}
                        />
                        <label className="form-check-label" for="inlineCheckbox2">M</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox3" 
                            value="option3" 
                            onChange={handleTuesdayCheckboxInputChange}
                        />
                        <label className="form-check-label" for="inlineCheckbox3">T</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox4" 
                            value="option4" 
                            onChange={handleWednesdayCheckboxInputChange}
                        />
                        <label className="form-check-label" for="inlineCheckbox4">W</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox5" 
                            value="option5" 
                            onChange={handleThursdayCheckboxInputChange}
                        />
                        <label className="form-check-label" for="inlineCheckbox5">T</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox6" 
                            value="option6"
                            onChange={handleFridayCheckboxInputChange}
                        />
                        <label className="form-check-label" for="inlineCheckbox6">F</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox7"
                            value="option7" 
                            onChange={handleSaturdayCheckboxInputChange}
                        />
                        <label className="form-check-label" for="inlineCheckbox7">S</label>
                    </div>
                </div>
                </div>

                {   
                    something.map(element => { // now for each day, you have an input
                        return(
                            <div className="dayOfTheWeekInputs">
                                <label style={{ display: "block" }}for={"dayOfTheWeekInput" + element}>{element}</label>
                                <input 
                                    id={"dayOfTheWeekInput" + element}
                                    placeholder="15:00"
                                    type="text"
                                    required
                                />
                            </div>
                        )
                    })     
                }

                <div className="addHabitInputDivs form-group">
                    <label for="exampleFormControlTextarea1">Triggers to Avoid</label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        onChange={handleTriggersToAvoidInputChange}
                    ></textarea>
                </div>
                <div className="addHabitInputDivs form-group">
                    <label for="addHabitFormDescription">Description</label>
                    <textarea 
                        className="form-control" 
                        id="addHabitFormDescription" 
                        rows="3"
                        onChange={handleDescriptionInputChange}
                    ></textarea>
                </div>
                <div id="addHabitSubmitButtonDiv" className="form-group">
                    <button 
                      id="addHabitSubmitButton" 
                      type="submit" 
                      className="btn btn-primary"
                      onSubmit={addHabit}
                    >Add</button>                    
                </div>
            </form>

        </div>
    );
}

export default AddHabitForm;