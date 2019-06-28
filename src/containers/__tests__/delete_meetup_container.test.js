import React from "react";
import { Provider } from "react-redux";
import Enzyme, { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import DeleteContainer from '../create_container';
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('Create Meetup container', () => {
    const wrapper = shallow(<Provider store={store}>
                                <DeleteContainer />
                            </Provider>);
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
