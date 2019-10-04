import React from "react";
import ReactDOM from "react-dom";
import WeatherInfo from "./WeatherInfo";
import {testWeatherData} from "./WeatherInfo.test.utils";

describe("Weather Info test", () => {

  it("expect an empty weather Info box to show loading text", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(<WeatherInfo weatherData={null} metricTemp={true}/>, wrapper);
    expect(wrapper.textContent).toMatch('loading'); 
  });

  it("expect weather infor to show kelvin when metric temp equals false", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(<WeatherInfo weatherData={testWeatherData} metricTemp={false}/>, wrapper);
    const form = wrapper.querySelector('.temperature');
    expect(form.innerHTML).toMatch('53 K');
  });

  it("expect weather infor to show  when metric temp equals true", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(<WeatherInfo weatherData={testWeatherData} metricTemp={true}/>, wrapper);
    const form = wrapper.querySelector('.temperature');
    expect(form.innerHTML).toMatch(`53 ${String.fromCharCode(176)} C`);
  });


})

