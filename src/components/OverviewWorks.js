import React from "react";

function OverviewWorks(props) {
    const { works } = props;

    return (
        <div>
            <div>
                <h4>Work Experiences</h4>
                {works.map(work => 
                    <div key={work.id}>
                        <div>{work.name}</div>
                        <div>{work.title}</div>
                        <div>{work.dateStart}</div>
                        <div>{work.dateEnd}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OverviewWorks;