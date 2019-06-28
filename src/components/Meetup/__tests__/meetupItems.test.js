import React from "react";
import Enzyme, { shallow } from "enzyme";
import MeetupItems from '../meetupItems';
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Meetup', () => {
    const wrapper = shallow(<MeetupItems/>);
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
})