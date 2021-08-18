import React from "react";

function OverviewInfos(props) {
    const { infos } = props;

    return (
        <div>
            <div>
                <h4>Personal information</h4>
                {infos.map(info => 
                    <div key={info.id}>
                        <div>{info.name}</div>
                        <div>{info.email}</div>
                        <div>{info.phone}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OverviewInfos;