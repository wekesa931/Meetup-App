import React from 'react';
import {Link} from 'react-router-dom';
import CreateMeetup from '../Create/addmeetup';
import DeleteContainer from '../../containers/delete_meetup_container';


const MeetupItems = (props) => {
    const renderMeetups = (meetups) => (
        meetups ? 
            meetups.map((item)=>(
                <div key={item.id}
                    style={{
                        boxShadow: 'rgb(136, 136, 136) 0px 0px 7px 0px',
                        padding: '3px',
                        marginBottom: '10px'
                    }}
                >
                    <Link to={`/meetups/${item.id}`}
                            style={{
                                textDecoration:'none',
                                color: 'black'
                            }}
                    >
                        <div><h3>{item.name}</h3></div>
                        <div>{item.title}</div> 
                        <div>Created On: {item.createdon}</div>
                    </Link>
                    <DeleteContainer id={item.id}/>
                </div>
            ))
        : null
    )
    return (
        <div>
            {renderMeetups(props.meetups)}
            <CreateMeetup/>
        </div>
    );
};

export default MeetupItems;