import React, { Component } from "react";

class AddValidBtns extends Component {
  render() {
    const { addExperience, section, valid } = this.props;
    return (
      <div className="btn-container">
        <button type="submit" className="btn-add btn" onClick={addExperience}>
          {`Add ${section} experience`}
        </button>
        <button
          type="submit"
          className="btn-valid btn"
          onClick={valid}
        >
          Valid
        </button>
      </div>
    );
  }
}

export default AddValidBtns;
