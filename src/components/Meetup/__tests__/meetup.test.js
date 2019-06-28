import React from "react";
import Enzyme, { shallow } from "enzyme";
import Meetup from '../meetup';
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Meetup', () => {
    const wrapper = shallow(<Meetup/>);
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
})