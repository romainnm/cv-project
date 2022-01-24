import React, { Component } from "react";

export default class FormWorks extends Component {
  render() {
    const {
      handleSubmitWork,
      handleChange,
      workTitle,
      workName,
      workDateStart,
      workDateEnd,
    } = this.props;
    return (
      <form onSubmit={handleSubmitWork} className="form-work">
        <h3>Work Experiences Form</h3>
        <div className="form-inputs">
          <input
            type="text"
            name="workName"
            onChange={handleChange}
            value={workName}
            placeholder="Enter work name"
            required
            className="input-form"
          />
          <input
            type="text"
            name="workTitle"
            onChange={handleChange}
            value={workTitle}
            placeholder="Enter work title"
            required
            className="input-form"
          />
          <div className="multi-input">
            <div className="date">
              <label htmlFor="workDateStart">Work Start</label>
              <input
                type="date"
                id="workDateStart"
                name="workDateStart"
                onChange={handleChange}
                value={workDateStart}
                placeholder="Enter school starting date"
                required
                className="input-form"
              />
            </div>
            <div className="date">
              <label htmlFor="workDateEnd">Work End</label>
              <input
                type="date"
                id="workDateEnd"
                name="workDateEnd"
                onChange={handleChange}
                value={workDateEnd}
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
