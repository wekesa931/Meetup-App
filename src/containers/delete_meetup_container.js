import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteMeetupItem,meetupListAll } from '../actions';
 
class DeleteContainer extends Component {
    delMeetup = async (props) => {
        await props.deleteMeetupItem(props.id)
        props.meetupListAll()
    }
    render() { 
        return (
            <div
                style={{
                    background:'#f5b0b0',
                    maxWidth: '33%',
                    padding: '5px',
                    textAlign:'center',
                    cursor: 'pointer',
                    margin: '10px'
                }}
                onClick={()=>this.delMeetup(this.props)}
            >
                Delete Meetup
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allmeetups: state.meetupList.meetupList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteMeetupItem,meetupListAll
    },dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(DeleteContainer);