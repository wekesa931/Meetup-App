import meetup_reducer from '../meetup_reducer';

describe("meetupReducer", ()=>{

    test("should return empty object when nothing is innitialized", () => {
        const newState = meetup_reducer(undefined, {});
        expect(newState).toEqual({});
      });

    test("should set my guess to the number I guess with", () => {
      const newState = meetup_reducer(undefined, {
        type: 'GET_ALL_MEETUPS',
        payload: 'topic'

      });
      expect(newState).toEqual({
        "meetupList": "topic",
      });
    });

    test("should set my guess to the number I guess with", () => {
      const newState = meetup_reducer(undefined, {
        type: 'GET_SINGLE_MEETUPS_FAILURE',
        payload: 'An error has occured'

      });
      expect(newState).toEqual({
        "meetupItem": "An error has occured",
      });
    });
});