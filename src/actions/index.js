import axios from 'axios';
const URL = 'http://localhost:3004';


export function meetupListAll () {
    return (dispatch) => {
      return axios
        .get(`${URL}/meetups`)
        .then(response => {
          dispatch({
            type: 'GET_ALL_MEETUPS',
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: 'GET_ALL_MEETUPS',
            payload: "An error has occured fetching the random number"
          });
        });
    };
};


export function singleMeetupItem (id) {
    return (dispatch) => {
      return axios
        .get(`${URL}/meetups?id=${id}`)
        .then(response => {
          dispatch({
            type: 'GET_SINGLE_MEETUP',
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: 'GET_ALGET_SINGLE_MEETUPL_MEETUPS',
            payload: "An error has occured!"
          });
        });
    };
};

export function createMeetupItem (meetup) {
    return (dispatch) => {
      return axios
        .post(`${URL}/meetups`,meetup)
        .then(response => {
          dispatch({
            type: 'POST_MEETUP',
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: 'GET_SINGLE_MEETUPS_FAILURE',
            payload: "An error has occured!"
          });
        });
    };
};


export function deleteMeetupItem (id) {
    return (dispatch) => {
      return axios
        .delete(`${URL}/meetups/${id}`)
        .then(response => {
          dispatch({
            type: 'DELETE_MEETUP',
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: 'DELETE_MEETUP',
            payload: "An error has occured!"
          });
        });
    };
};
