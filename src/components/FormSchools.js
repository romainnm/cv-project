import React, { Component } from "react";

export default class FormSchools extends Component {
  render() {
    const {
      handleSubmitSchool,
      handleChange,
      schoolName,
      schoolDegree,
      schoolDateStart,
      schoolDateEnd,
    } = this.props;
    return (
      <form onSubmit={handleSubmitSchool} className="form-school">
        <h3>School Experiences Form</h3>
        <div className="form-inputs">
          <input
            type="text"
            name="schoolName"
            onChange={handleChange}
            value={schoolName}
            placeholder="Enter school name"
            required
            className="input-form"
          />
          <input
            type="text"
            name="schoolDegree"
            onChange={handleChange}
            value={schoolDegree}
            placeholder="Enter school degree"
            required
            className="input-form"
          />

          <div className="multi-input">
            <div className="date">
              <label htmlFor="schoolDateStart">School Start</label>
              <input
                type="date"
                id="schoolDateStart"
                name="schoolDateStart"
                onChange={handleChange}
                value={schoolDateStart}
                placeholder="Enter school starting date"
                required
                className="input-form"
              />
            </div>
            <div className="date">
              <label htmlFor="schoolDateEnd">School End</label>
              <input
                type="date"
                id="schoolDateEnd"
                name="schoolDateEnd"
                onChange={handleChange}
                value={schoolDateEnd}
                placeholder="Enter school ending date"
                required
                className="input-form"
              />
            </div>
          </div>
          <input type="submit" value="submit" className="btn" />
        </div>
      </form>
    );
  }
}
