export default function(state={},action){
    
    switch(action.type){
        case 'GET_ALL_MEETUPS':
            return {...state,meetupList:action.payload}
        case 'GET_SINGLE_MEETUP':
            return {...state,meetupItem:action.payload}
        case 'GET_SINGLE_MEETUPS_FAILURE':
            return {...state,meetupItem:action.payload}
        default:
            return state;
    }
}