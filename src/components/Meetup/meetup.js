import React from 'react';
import SingleMeetup from '../../containers/single_meetup_container';

const Meetup = (props) => {
    return (
        <div>
            <SingleMeetup {...props}/>
        </div>
    );
};

export default Meetup;