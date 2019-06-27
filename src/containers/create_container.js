import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMeetupItem,meetupListAll } from '../actions';

class CreateContainer extends Component {
    createMeetupItem = async (mtp,props) => {
        await props.createMeetupItem(mtp)
        props.meetupListAll()
    }
    render() { 
        return (
            <div>
                <button type='button'
                    style={{
                        background:'#aef1ae',
                        padding:'5px',
                        margin: '5px'
                    }}
                    onClick={()=>this.createMeetupItem(this.props.mtp,this.props)}
                >Create Meetup</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        meetup: state.meetupList.meetupList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createMeetupItem,meetupListAll
    },dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(CreateContainer);