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
        return (
          <form onSubmit={handleSubmitInfo} className="form-infos">
            <h3>Personal Information Form</h3>
            <div className="form-inputs">
              <input
                type="text"
                name="infoName"
                onChange={handleChange}
                value={infoName}
                placeholder="Enter fullname"
                required
                className="input-form"
              />
              <input
                type="email"
                name="infoEmail"
                onChange={handleChange}
                value={infoEmail}
                placeholder="Enter email"
                required
                className="input-form"
              />
              <div className="multi-input">
                <input
                  type="tel"
                  name="infoPhone"
                  onChange={handleChange}
                  value={infoPhone}
                  placeholder="Enter tel"
                  required
                  className="input-form phone"
                />
                <input
                  type="text"
                  name="infoLocation"
                  onChange={handleChange}
                  value={infoLocation}
                  placeholder="Enter location, ex: City, State"
                  required
                  className="input-form location"
                />
              </div>
              <input type="submit" value="submit" className="btn" />
    
            </div>
          </form>
        ); 
    }     
}