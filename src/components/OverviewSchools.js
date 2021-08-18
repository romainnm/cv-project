import React from "react";

function OverviewSchools(props) {
    const { schools } = props;

    return (
        <div>
            <div>
                <h4>Schools Experiences</h4>
                {schools.map(school => 
                    <div key={school.id}>
                        <div>{school.name}</div>
                        <div>{school.degree}</div>
                        <div>{school.dates}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OverviewSchools;