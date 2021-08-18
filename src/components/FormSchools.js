import React, { Component } from 'react';

export default class FormSchools extends Component {
    render(){
        const {
            handleSubmitSchool,
            handleChange,
            schoolName,
            schoolDegree,
            schoolDates,
        } = this.props;
        return(
            <form onSubmit={handleSubmitSchool}>
            <h4>School Experiences</h4>
            <input 
                type="text" 
                name="schoolName"
                onChange={handleChange}
                value={schoolName}
                placeholder="Enter school name" 
                required 
            />
            <input 
                type="text" 
                name="schoolDegree"
                onChange={handleChange}
                value={schoolDegree}
                placeholder="Enter school degree" 
                required 
            />
            <input 
                type="text"
                name="schoolDates" 
                onChange={handleChange}
                value={schoolDates}
                placeholder="Enter school dates" 
                required 
            />
            <input type="submit" value="submit" />
            </form>
        ) 
    }     
}