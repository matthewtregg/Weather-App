import React from "react";
import ReactDOM from "react-dom";
import SidebarList from "./SidebarList";

describe("Weather Info test", () => {

  it("expect an empty sidebar to show no history", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(<SidebarList locationHistory={null} />, wrapper);
    expect(wrapper.textContent).toMatch('No History'); 
  });
  

  
});
