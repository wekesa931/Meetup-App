import React from 'react';

const DisplayMeetup = (props) => {
    console.log(props.mtp)
    const renderMeetup = (meetup) => (
        meetup ? meetup.map((item)=>(
            <div key={item.id}>
                <div><h3>{item.name}</h3></div>
                <div><strong>{item.title}</strong></div><br/>
                <div>{item.details}</div><br/>
                <div>Created on: {item.createdon}</div>
            </div>
        )):null
    )
    return (
        <div>
            {renderMeetup(props.mtp)}
        </div>
    );
};

export default DisplayMeetup;