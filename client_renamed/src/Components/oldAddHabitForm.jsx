import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from "axios";

class AddHabitForm extends React.Component{
    constructor() {
        super();
        this.state = {
            habitInputValue: "",
            sundayCheckbox: false,
            mondayCheckbox: false,
            tuesdayCheckbox: false,
            wednesdayCheckbox: false,
            thursdayCheckbox: false,
            fridayCheckbox: false,
            satudayCheckbox: false,
            triggersToAvoidValue: "",
            descriptionsValue: "",
            submitButtonValue: false,
            checkedDays: []
        }
    }

    handleHabitInputChange = (e) => {
        let inputValue = this.state.habitInputValue;
        this.setState({
            habitInputValue: e.target.value
        });
    }

    handleSundayCheckboxInputChange = (e) => {
        let inputValue = !(this.state.sundayCheckbox);
        this.setState({
            sundayCheckbox: inputValue,
            checkedDays: [...this.state.checkedDays, "sunday"]
        });
    }

    handleMondayCheckboxInputChange = () => {
        let inputValue = !(this.state.mondayCheckbox);
        this.setState({
            mondayCheckbox: inputValue,
            checkedDays: [...this.state.checkedDays, "monday"]
        });
    }

    handleTuesdayCheckboxInputChange = () => {
        let inputValue = !(this.state.tuesdayCheckbox);
        this.setState({
            tuesdayCheckbox: inputValue,
            checkedDays: [...this.state.checkedDays, "tuesday"]
        });
    }

    handleWednesdayCheckboxInputChange = () => {
        let inputValue = !(this.state.wednesdayCheckbox);
        this.setState({
            wednesdayCheckbox: inputValue,
            checkedDays: [...this.state.checkedDays, "wednesday"]
        });
    }

    handleThursdayCheckboxInputChange = () => {
        let inputValue = !(this.state.thursdayCheckbox);
        this.setState({
            thursdayCheckbox: inputValue,
            checkedDays: [...this.state.checkedDays, "thursday"]
        });
    }

    handleFridayCheckboxInputChange = () => {
        let inputValue = !(this.state.fridayCheckbox);
        this.setState({
            fridayCheckbox: inputValue,
            checkedDays: [...this.state.checkedDays, "friday"]
        });
    }

    handleSaturdayCheckboxInputChange = () => {
        let inputValue = !(this.state.saturdayCheckbox);
        this.setState({
            saturdayCheckbox: inputValue,
            checkedDays: [...this.state.checkedDays, "saturday"]
        });
    }

    handleTriggersToAvoidInputChange = (e) => {
        let inputValue = this.state.triggersToAvoidValue;
        this.setState({
            triggersToAvoidValue: e.target.value
        });
    }

    handleDescriptionInputChange = (e) => {
        let inputValue = this.state.descriptionsValue;
        this.setState({
            descriptionsValue: e.target.value
        });
    }

    addHabit = async () => {
        const { habitInputValue, timesADayValue, triggersToAvoidValue, descriptionsValue, submitButtonValue } = this.state;
        const reqBody = {
            habit: habitInputValue, 
            username: "", 
            triggers_to_avoid: triggersToAvoidValue, 
            habit_description: descriptionsValue
        }
        console.log(reqBody)

        let {data} = await axios.post("http://localhost:4000/shows", reqBody);
        console.log("Data:", data);
    }

    render() {
        console.log("props:", this.props);
        let { checkedDays } = this.state;

        return (
            <div>
                <form>
                    <div className="addHabitInputDivs form-group">
                        <label for="exampleFormControlInput1">Habit</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Study DSA" 
                            onChange={this.handleHabitInputChange}
                            required
                        />
                    </div>
                    <div className="addHabitInputDivs form-group">
                    <p>Days of the week</p>
                    <div id="daysOfTheWeekCheckboxesContainer">
                        <div class="form-check form-check-inline">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="inlineCheckbox1" 
                                value="option1" 
                                onChange={this.handleSundayCheckboxInputChange}
                            />
                            <label class="form-check-label" for="inlineCheckbox1">S</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="inlineCheckbox2" 
                                value="option2" 
                                onChange={this.handleMondayCheckboxInputChange}
                            />
                            <label class="form-check-label" for="inlineCheckbox2">M</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="inlineCheckbox3" 
                                value="option3" 
                                onChange={this.handleTuesdayCheckboxInputChange}
                            />
                            <label class="form-check-label" for="inlineCheckbox3">T</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="inlineCheckbox4" 
                                value="option4" 
                                onChange={this.handleWednesdayCheckboxInputChange}
                            />
                            <label class="form-check-label" for="inlineCheckbox4">W</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="inlineCheckbox5" 
                                value="option5" 
                                onChange={this.handleThursdayCheckboxInputChange}
                            />
                            <label class="form-check-label" for="inlineCheckbox5">T</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="inlineCheckbox6" 
                                value="option6"
                                onChange={this.handleFridayCheckboxInputChange}
                            />
                            <label class="form-check-label" for="inlineCheckbox6">F</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="inlineCheckbox7"
                                value="option7" 
                                onChange={this.handleSaturdayCheckboxInputChange}
                            />
                            <label class="form-check-label" for="inlineCheckbox7">S</label>
                        </div>
                    </div>
                    </div>

                    {   
                        checkedDays.map(element => {
                            return (
                                <input />
                            ) 
                          })
                            
                    }

                    <div className="addHabitInputDivs form-group">
                        <label for="exampleFormControlTextarea1">Triggers to Avoid</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            onChange={this.handleTriggersToAvoidInputChange}
                        ></textarea>
                    </div>
                    <div className="addHabitInputDivs form-group">
                        <label for="addHabitFormDescription">Description</label>
                        <textarea 
                            className="form-control" 
                            id="addHabitFormDescription" 
                            rows="3"
                            onChange={this.handleDescriptionInputChange}
                        ></textarea>
                    </div>
                    <div id="addHabitSubmitButtonDiv" className="form-group">
                        <button id="addHabitSubmitButton" type="submit" class="btn btn-primary">Sign in</button>                    
                    </div>
                </form>

            </div>
        );
    }
  
}

export default AddHabitForm;