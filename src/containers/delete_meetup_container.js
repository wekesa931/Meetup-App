import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteMeetupItem } from '../actions';
 
class DeleteContainer extends Component {
    delMeetup = (props) => (
        props.deleteMeetupItem(props.id)
    )
    render() { 
        // console.log(this.props)
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
    // console.log(state.meetupList.meetupList)
    return {
        allmeetups: state.meetupList.meetupList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteMeetupItem
    },dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(DeleteContainer);