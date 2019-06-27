import { combineReducers } from 'redux';
import meetupList from './meetup_reducer';

const rootReducer = combineReducers({
    meetupList
})

export default rootReducer;