import axios from "axios";
import { storeFactory } from '../../tests/testutils';
import { meetupListAll,singleMeetupItem,createMeetupItem } from '../index';




describe("Get all meetups", () => {
    test("should fetch all meetups", async () => {
        const data = {
            "id": 2,
            "name": "Python",
            "createdon": "5/3/2010",
            "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "title": "Lorem ipsum dolor sit amet"
        };
        axios.get.mockImplementation(() =>
            Promise.resolve({
            data
            })
        );
        const store = storeFactory();
        await store.dispatch(meetupListAll())
        const newState = store.getState();
        expect(newState.meetupList.meetupList).toEqual(data);
    });
    test("should fetch a single meetups", async () => {
        const data = {
            "id": 2,
            "name": "Python",
            "createdon": "5/3/2010",
            "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "title": "Lorem ipsum dolor sit amet"
        };
        axios.get.mockImplementation(() =>
            Promise.resolve({
            data
            })
        );
        const store = storeFactory();
        await store.dispatch(singleMeetupItem(2))
        const newState = store.getState();
        expect(newState.meetupList.meetupItem).toEqual(data);
    });
    // test("should fetch a single meetups", async () => {
    //     jest.spyOn(axios, "post");
    //     const data = {
    //         "id": 2,
    //         "name": "Python",
    //         "createdon": "5/3/2010",
    //         "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //         "title": "Lorem ipsum dolor sit amet"
    //     };
    //     axios.post.mockImplementation(() =>
    //         Promise.resolve({
    //         data
    //         })
    //     );
    //     const store = storeFactory();
    //     await store.dispatch(singleMeetupItem(data))
    //     const newState = store.getState();
    //     expect(newState.meetupList.meetupItem).toEqual(data);
    // });
    
});
