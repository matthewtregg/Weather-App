import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("integration tests", () => {

  it("expect submit to throw an error with invalid location input", () => {
    const wrapper = mount(<App />);
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: '' } })
    const submit = new window.Event('submit'); 
    expect(() => wrapper.dispatchEvent(submit)).toThrowError();
  });

})

configure({ adapter: new Adapter()})
