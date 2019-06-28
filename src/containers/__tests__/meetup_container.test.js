import React from "react";
import { Provider } from "react-redux";
import Enzyme, { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import {Meetups} from '../create_container';
import EnzymeAdapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockStore = configureMockStore([thunk,promiseMiddleware]);
const store = mockStore({});

describe('Create Meetup container', () => {
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
        props.meetupListAll = jest.fn();
        wrapper = shallow(
            <Provider store={store}>
                <Meetups {...props}/> 
            </Provider> );
        spy = jest.spyOn(wrapper.instance().props.children.props, 'meetupListAll');
    });
    
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it("fetches meetups on load", () => {
        spy()
        expect(spy).toHaveBeenCalled();
    });
})