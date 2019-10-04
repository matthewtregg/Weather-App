import React from "react";
import ReactDOM from "react-dom";
import App from "./App";



it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("integration tests", () => {

  it("expect submit to throw an error with invalid location input", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(<App />, wrapper);
    const form = wrapper.querySelector('form');
    const submit = new window.Event('submit');
    // error throwing but cannot get relevant expect syntax
    expect(() => {form.dispatchEvent(submit)}).toThrow();
  });


})

