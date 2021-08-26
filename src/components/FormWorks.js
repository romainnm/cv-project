import React, { Component } from 'react';

export default class FormWorks extends Component {
    render(){
        const {
            handleSubmitWork,
            handleChange,
            workTitle,
            workName,
            workDateStart,
            workDateEnd,
        } = this.props;
        return(
            <form onSubmit={handleSubmitWork}>
                <h4>Work Experiences</h4>
                <div className="list-input">
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
                    <div className="multi-input">
                        <input 
                            type="text"
                            name="workDateStart"
                            onChange={handleChange}
                            value={workDateStart}
                            placeholder="Enter work date start" 
                            required 
                        />
                        <input 
                            type="text"
                            name="workDateEnd"
                            onChange={handleChange}
                            value={workDateEnd}
                            placeholder="Enter work date end" 
                            required 
                        />
                    </div>
                    <input type="submit" value="submit" />
                </div>       
            </form>
        ) 
    }     
}