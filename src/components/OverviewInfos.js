import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdEmail, MdPhone, MdMap } from "react-icons/md";

function OverviewInfos(props) {
  const { infos } = props;
  return (
    <div>
      <h2>Personal information</h2>
      {infos.map((info) => (
        <ul key={info.id} className="overview-list">
          <li>
            <CgProfile className="icon" /> <span>{info.name}</span>
          </li>
          <li>
            <MdEmail className="icon" /> <span>{info.email}</span>
          </li>
          <li>
            <MdPhone className="icon" />
            <span>{info.phone}</span>
          </li>
          <li>
            <MdMap className="icon" />
            <span>{info.location}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default OverviewInfos;
