import axios from 'axios';
const URL = 'http://localhost:3004';

export function meetupListAll(){
    const request = axios.get(`${URL}/meetups`)
                    .then(response => response.data)
    return {
        type: 'GET_ALL_MEETUPS',
        payload: request
    }
}

export function singleMeetupItem(id){
    const request = axios.get(`${URL}/meetups?id=${id}`)
                    .then(response => response.data)
    return {
        type: 'GET_SINGLE_MEETUP',
        payload: request
    }
}

export function createMeetupItem(meetup){
    const request = axios.post(`${URL}/meetups`,meetup)
                     .then(response => response.data)
    
    return {
        type: 'POST_MEETUP',
        payload: request
    }
}

export function deleteMeetupItem(id){
    console.log(id)
    const request = axios.delete(`${URL}/meetups/${id}`)
                    .then(response => response.data)
    return {
        type: 'DELETE_MEETUP',
        payload: request
    }
}
