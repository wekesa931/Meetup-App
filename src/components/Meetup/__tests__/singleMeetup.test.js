import React from "react";
import Enzyme, { shallow } from "enzyme";
import DisplayMeetup from '../singleMeetup';
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Meetup', () => {
    const wrapper = shallow(<DisplayMeetup/>);
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
})