import * as React from 'react';
import Employee from './Employee';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Employee />", () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Employee />);
        expect(wrapper.html()).toContainEqual("test");
    });
});