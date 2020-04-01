import React from "react";
import { shallow, mount } from "enzyme";

import App from "./App";
import Counter from "./Components/Counter";
import { formatMoney } from "../Utils";

describe("App Component", () => {
  const wrapper = shallow(<App />);
  const component = wrapper.find('[data-test="background"]');

  it("renders", () => {
    expect(component.length).toBe(1);
  });
});

describe("Util functions", () => {
  describe("Format Money", () => {
    test("24.57 returns '$24.57'", () => {
      expect(formatMoney(24.57)).toBe("$24.57");
    });
    test("5 returns '$5'", () => {
      expect(formatMoney(5)).toBe("$5");
    });
  });
});

describe("Counter Component", () => {
  describe("updates state", () => {
    let wrapper = mount(<Counter />);
    test("Plus button click increment state by 1", () => {
      expect(wrapper.find("input[data-test='input']").props().value).toBe(0);
      wrapper.find("button[data-test='plus']").simulate("click");
      expect(wrapper.find("input[data-test='input']").props().value).toBe(1);
    });
    test("Minus button click decrement state by 1", () => {
      expect(wrapper.find("input[data-test='input']").props().value).toBe(1);
      wrapper.find("button[data-test='minus']").simulate("click");
      expect(wrapper.find("input[data-test='input']").props().value).toBe(0);
    });
  });
});
