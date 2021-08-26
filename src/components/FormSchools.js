import React, { Component } from 'react';

export default class FormSchools extends Component {
    render(){
        const {
            handleSubmitSchool,
            handleChange,
            schoolName,
            schoolDegree,
            schoolDateStart,
            schoolDateEnd,
        } = this.props;
        return(
            <form onSubmit={handleSubmitSchool}>
                <h4>School Experiences</h4>
                <div className="list-input">
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
                    <div class="multi-input">
                        <input 
                            type="text"
                            name="schoolDateStart" 
                            onChange={handleChange}
                            value={schoolDateStart}
                            placeholder="Enter school date start" 
                            required 
                        />
                        <input 
                            type="text"
                            name="schoolDateEnd" 
                            onChange={handleChange}
                            value={schoolDateEnd}
                            placeholder="Enter school date end" 
                            required 
                        />
                    </div>
                    <input type="submit" value="submit" />
                </div>    
            </form>
        ) 
    }     
}