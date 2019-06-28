import React from "react";
import { Provider } from "react-redux";
import Enzyme, { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import {SingleMeetup} from '../create_container';
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('Get single Meetup container', () => {
    // const wrapper = shallow(<Provider store={store}>
    //                             <SingleMeetup />
    //                         </Provider>);
    // it('renders correctly', () => {
    //     expect(wrapper).toMatchSnapshot()
    // })

    let props;
    let wrapper;
    let spy;
    beforeEach(() => {
        props = {
            meetups: [
                {
                    id: 1,
                    title: "Another test meetup"
                }
            ]
        };
        props.singleMeetupItem = jest.fn();
        wrapper = shallow(
            <Provider store={store}>
                <SingleMeetup {...props}/> 
            </Provider> );
        spy = jest.spyOn(wrapper.instance().props.children.props, 'singleMeetupItem');
    });
    
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it("fetches meetups on load", () => {
        spy()
        expect(spy).toHaveBeenCalled();
    });
    
})