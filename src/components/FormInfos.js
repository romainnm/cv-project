import React, { Component } from 'react';

export default class FormInfos extends Component {
    render(){
        const {
            handleSubmitInfo,
            handleChange,
            infoName,
            infoEmail,
            infoPhone,
            infoLocation,
        } = this.props;
        return(
            <form onSubmit={handleSubmitInfo}>
                <h4>Personal Information</h4>
                <div className="list-input">
                    <input 
                        type="text"
                        name="infoName" 
                        onChange={handleChange} 
                        value={infoName}
                        placeholder="Enter fullname" 
                        required 
                    />
                    <input 
                        type="email"
                        name="infoEmail" 
                        onChange={handleChange} 
                        value={infoEmail}
                        placeholder="Enter email" 
                        required 
                    />
                    <div className="multi-input">
                        <input 
                            type="tel" 
                            name="infoPhone"
                            onChange={handleChange} 
                            value={infoPhone}
                            placeholder="Enter tel" 
                            required 
                        />
                        <input 
                            type="text" 
                            name="infoLocation"
                            onChange={handleChange} 
                            value={infoLocation}
                            placeholder="Enter location, ex: City, State" 
                            required 
                        />
                    </div>
                    <input type="submit" value="submit" />    
                </div>    
            </form>
        ) 
    }     
}