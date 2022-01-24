import React from "react";

function OverviewWorks(props) {
  const { works } = props;

  return (
    <div className="overview">
      <h2>Work Experiences</h2>
      {works.map((work) => (
        <ul key={work.id} className="overview-list">
          <li>
            <p>
              <span className="pink">Company: </span>
              {work.name}
            </p>
          </li>
          <li>
            <p>
              <span className="pink">Title: </span>
              {work.title}
            </p>
          </li>
          <li>
            <p>
              <span className="pink">Date: </span>
              {work.dateStart}
            </p>
            <p>
              <span className="pink">> </span>
              {work.dateEnd}
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default OverviewWorks;
