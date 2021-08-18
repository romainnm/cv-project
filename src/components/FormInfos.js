import React, { Component } from 'react';

export default class FormInfos extends Component {
    render(){
        const {
            handleSubmitInfo,
            handleChange,
            infoName,
            infoEmail,
            infoPhone,
        } = this.props;
        return(
            <form className="personal-infos" onSubmit={handleSubmitInfo}>
                <h4>Personal Information</h4>
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
                <input 
                    type="tel" 
                    name="infoPhone"
                    onChange={handleChange} 
                    value={infoPhone}
                    placeholder="Enter tel" 
                    required 
                />
                <input type="submit" value="submit" />
            </form>
        ) 
    }     
}