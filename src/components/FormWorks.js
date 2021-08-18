import React, { Component } from 'react';

export default class FormWorks extends Component {
    render(){
        const {
            handleSubmitWork,
            handleChange,
            workTitle,
            workName,
            workDates,
        } = this.props;
        return(
            <form onSubmit={handleSubmitWork}>
                <h4>Work Experiences</h4>
                <input 
                    type="text" 
                    name="workName"
                    onChange={handleChange}
                    value={workName}
                    placeholder="Enter work name" 
                    required 
                />
                <input 
                    type="text" 
                    name="workTitle"
                    onChange={handleChange}
                    value={workTitle}
                    placeholder="Enter work title" 
                    required 
                />
                <input 
                    type="text"
                    name="workDates"
                    onChange={handleChange}
                    value={workDates}
                    placeholder="Enter work dates" 
                    required 
                />
                <input type="submit" value="submit" />
            </form>
        ) 
    }     
}