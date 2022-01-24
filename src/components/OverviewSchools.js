import React from "react";

function OverviewSchools(props) {
  const { schools } = props;

  return (
    <div className="overview">
      <h2>School Experiences</h2>
      {schools.map((school) => (
        <ul key={school.id} className="overview-list">
          <li>
            <p>
              <span className="pink">School: </span>
              {school.name}
            </p>
          </li>
          <li>
            <p>
              <span className="pink">Degree: </span>
              {school.degree}
            </p>
          </li>
          <li>
            <p>
              <span className="pink">Date: </span>
              {school.dateStart}
            </p>
            <p>
              <span className="pink">> </span>
              {school.dateEnd}
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default OverviewSchools;
