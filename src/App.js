import React, { Component } from "react";
import OverviewInfos from "./components/OverviewInfos";
import OverviewSchools from "./components/OverviewSchools";
import OverviewWorks from "./components/OverviewWorks";
import FormInfos from "./components/FormInfos";
import FormWorks from "./components/FormWorks";
import FormSchools from "./components/FormSchools";  
import uniqid from "uniqid";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    /* Personal Info States */
      infoName: '',
      infoEmail: '',
      infoPhone: '',
      infos: [],
      showHideInfos: false, 
      showHideInfosForm: true,
    /* School States */  
      schoolName: '',
      schoolDegree: '',
      schoolDates: '',
      schools: [],
      showHideSchools: false, 
      showHideSchoolsForm: true,
    /* Work States */  
      workName: '',
      workTitle: '',
      workDates: '',
      works: [],
      showHideWorks: false, 
      showHideWorksForm: true,
    };
    
  }

  handleChange = (e) => { 
    this.setState({ [e.target.name]: e.target.value});  
  }
  handleSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      infos: this.state.infos.concat({
        name: this.state.infoName,
        email: this.state.infoEmail,
        phone: this.state.infoPhone,
        id: uniqid(),
      }),
      infoName: '',
      infoEmail: '',
      infoPhone: '',
      showHideInfos: !this.setState.showHideInfos,
      showHideInfosForm: this.setState({showHideInfosForm: false}),
    });
  }
  handleSubmitSchool = (e) => {
    e.preventDefault();
    this.setState({
      schools: this.state.schools.concat({
        name: this.state.schoolName,
        degree: this.state.schoolDegree,
        dates: this.state.schoolDates,
        id: uniqid(),
      }),
      schoolName: '',
      schoolDegree: '',
      schoolDates: '',
      showHideSchools: !this.setState.showHideSchools,
      showHideSchoolsForm: this.setState({showHideSchoolsForm: false}),
    });
  }
  handleSubmitWork = (e) => {
    e.preventDefault();
    this.setState({
      works: this.state.works.concat({
        name: this.state.workName,
        title: this.state.workTitle,
        dates: this.state.workDates,
        id: uniqid(),
      }),
      workName: '',
      workTitle: '',
      workDate: '',
      showHideWorks: !this.setState.showHideWorks,
      showHideWorksForm: this.setState({showHideWorksForm: false}),
    });
  }

  render() {
    const {
      showHideInfosForm,
      showHideInfos,
      infoName,
      infoEmail,
      infoPhone,
      infos,
      showHideWorksForm,
      showHideWorks,
      workName,
      workTitle,
      workDates,
      works,
      showHideSchoolsForm,
      showHideSchools,
      schoolName,
      schoolDegree,
      schoolDates,
      schools,
    } = this.state;

    return <div className="main-content">
      <h1>Quick CV</h1>
{/* === Personal info section === */}
      {showHideInfosForm && (
        <FormInfos 
          infoName={infoName}
          infoEmail={infoEmail}
          infoPhone={infoPhone}
          handleChange={this.handleChange}
          handleSubmitInfo={this.handleSubmitInfo}
        />
      )}
      {showHideInfos && (
        <OverviewInfos infos={infos} />
      )}
{/* === Work section === */}
      {showHideWorksForm && (
        <FormWorks 
          workName={workName}
          workTitle={workTitle}
          workDates={workDates}
          handleChange={this.handleChange}
          handleSubmitWork={this.handleSubmitWork}
        />
      )}
      {showHideWorks && (
        <OverviewWorks works={works} />
      )}
{/* === School section === */}
      {showHideSchoolsForm && (
        <FormSchools 
          schoolName={schoolName}
          schoolDegree={schoolDegree}
          schoolDates={schoolDates}
          handleChange={this.handleChange}
          handleSubmitSchool={this.handleSubmitSchool}
        />
      )}
      {showHideSchools && (
        <OverviewSchools schools={schools} />
      )}
      
    </div>;
  }
}

export default App;