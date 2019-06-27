import React from 'react';
import CreateContainer from '../../containers/create_container';

const CreateMeetup = () => {
    const mtp = { 
        name: "Laravel",
        createdon:"12/3/2019",
        details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        title: "Lorem ipsum dolor sit amet"
    }
    return (
        <div>
            <CreateContainer mtp={mtp}/>
        </div>
    );
};

export default CreateMeetup;