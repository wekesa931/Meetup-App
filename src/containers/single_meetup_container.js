import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DisplayMeetup from '../components/Meetup/singleMeetup';

import { singleMeetupItem } from '../actions';


class SingleMeetup extends Component {
    componentWillMount(){
        this.props.singleMeetupItem(this.props.match.params.id)
    }
    render() { 
        // console.log(this.props.meetup)
        return (
            <div>
                <DisplayMeetup mtp={this.props.meetup}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.meetupList.meetupItem)
    return {
        meetup: state.meetupList.meetupItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        singleMeetupItem
    },dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(SingleMeetup);