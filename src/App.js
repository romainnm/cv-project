import React, { Component } from "react";
import OverviewInfos from "./components/OverviewInfos";
import OverviewSchools from "./components/OverviewSchools";
import OverviewWorks from "./components/OverviewWorks";
import FormInfos from "./components/FormInfos";
import FormWorks from "./components/FormWorks";
import FormSchools from "./components/FormSchools";
import uniqid from "uniqid";
import AddValidBtns from "./components/AddValidBtns";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /* Personal Info States */
      infoName: "",
      infoEmail: "",
      infoPhone: "",
      infoLocation: "",
      infos: [],
      showHideInfos: false,
      showHideInfosForm: true,
      /* School States */
      schoolName: "",
      schoolDegree: "",
      schoolDateStart: "",
      schoolDateEnd: "",
      schools: [],
      showHideSchools: false,
      showHideSchoolsForm: true,
      /* Work States */
      workName: "",
      workTitle: "",
      workDateStart: "",
      workDateEnd: "",
      works: [],
      showHideWorks: false,
      showHideWorksForm: true,
      /* Button Container*/
      showBtnSchool: false,
      showBtnWork: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      infos: this.state.infos.concat({
        name: this.state.infoName,
        email: this.state.infoEmail,
        phone: this.state.infoPhone,
        location: this.state.infoLocation,
        id: uniqid(),
      }),
      infoName: "",
      infoEmail: "",
      infoPhone: "",
      showHideInfos: !this.setState.showHideInfos,
      showHideInfosForm: false,
    });
  };
  handleSubmitSchool = (e) => {
    e.preventDefault();
    this.setState({
      schools: this.state.schools.concat({
        name: this.state.schoolName,
        degree: this.state.schoolDegree,
        dateStart: this.state.schoolDateStart,
        dateEnd: this.state.schoolDateEnd,
        id: uniqid(),
      }),
      schoolName: "",
      schoolDegree: "",
      schoolDateStart: "",
      schoolDateEnd: "",
      showHideSchools: !this.setState.showHideSchools,
      showHideSchoolsForm: false,
      showBtnSchool: true,
    });
  };
  handleSubmitWork = (e) => {
    e.preventDefault();
    this.setState({
      works: this.state.works.concat({
        name: this.state.workName,
        title: this.state.workTitle,
        dateStart: this.state.workDateStart,
        dateEnd: this.state.workDateEnd,
        id: uniqid(),
      }),
      workName: "",
      workTitle: "",
      workDateStart: "",
      workDateEnd: "",
      showHideWorks: !this.setState.showHideWorks,
      showHideWorksForm: false,
      showBtnWork: true,
    });
  };
  addWork = () => {
    this.setState({
      showHideWorksForm: true,
      showBtnWork: false,
    });
  };
  addSchool = () => {
    this.setState({
      showHideSchoolsForm: true,
      showBtnSchool: false,
    });
  };
  validWork = () => {
    this.setState({
      showBtnWork: false,
    });
  };
  validSchool = () => {
    this.setState({
      showBtnSchool: false,
    });
  };

  render() {
    const {
      showHideInfosForm,
      showHideInfos,
      infoName,
      infoEmail,
      infoPhone,
      infoLocation,
      infos,
      showHideWorksForm,
      showHideWorks,
      workName,
      workTitle,
      workDateStart,
      workDateEnd,
      works,
      showHideSchoolsForm,
      showHideSchools,
      schoolName,
      schoolDegree,
      schoolDateStart,
      schoolDateEnd,
      schools,
      showBtnWork,
      showBtnSchool,
    } = this.state;

    return (
      <main>
        <h1>
          Quick<span className="title">CV</span>
        </h1>
        {/* === Personal info section === */}
        <section className="personal-infos">
          {showHideInfosForm && (
            <FormInfos
              infoName={infoName}
              infoPhone={infoPhone}
              infoEmail={infoEmail}
              infoLocation={infoLocation}
              handleChange={this.handleChange}
              handleSubmitInfo={this.handleSubmitInfo}
            />
          )}
          {showHideInfos && <OverviewInfos infos={infos} />}
        </section>
        {/* === Personal info END === */}

        {/* === Work section === */}
        <section className="work-infos">
          {showHideWorksForm && (
            <FormWorks
              workName={workName}
              workTitle={workTitle}
              workDateStart={workDateStart}
              workDateEnd={workDateEnd}
              handleChange={this.handleChange}
              handleSubmitWork={this.handleSubmitWork}
            />
          )}
          {showHideWorks && <OverviewWorks works={works} />}
          {showBtnWork && (
            <AddValidBtns
              section={"Work"}
              addExperience={this.addWork}
              valid={this.validWork}
            />
          )}
        </section>

        {/* === Work END === */}

        {/* === School section === */}
        <section className="school-infos">
          {showHideSchoolsForm && (
            <FormSchools
              schoolName={schoolName}
              schoolDegree={schoolDegree}
              schoolDateStart={schoolDateStart}
              schoolDateEnd={schoolDateEnd}
              handleChange={this.handleChange}
              handleSubmitSchool={this.handleSubmitSchool}
            />
          )}
          {showHideSchools && <OverviewSchools schools={schools} />}
          {showBtnSchool && (
            <AddValidBtns
              section={"School"}
              addExperience={this.addSchool}
              valid={this.validSchool}
            />
          )}
        </section>
        {/* === School END === */}
      </main>
    );
  }
}

export default App;
