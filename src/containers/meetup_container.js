import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { meetupListAll } from '../actions';
import MeetupItems from '../components/Meetup/meetupItems';
 
class Meetups extends Component {
    componentWillMount(){
        this.props.meetupListAll()
    }
    render() { 
        return (
            <div>
                <MeetupItems meetups={this.props.allmeetups}/>
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
        meetupListAll
    },dispatch)
}
 
export default connect(mapStateToProps,{meetupListAll})(Meetups);