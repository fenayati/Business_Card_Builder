import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../theme";

import HCardBuilder from "../HCardBuilder";

configure({ adapter: new Adapter() });

describe("card builder", () => {
  it("takes a snapshot from the HCardBuilder component", () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <HCardBuilder />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("checks to see if the card gets upadted whenever create button gets clicked", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <HCardBuilder />
      </ThemeProvider>
    );

    const givenNameInput = wrapper.find('[data-testid="testGIVENNAME"]');
    const sureNameInput = wrapper.find('[data-testid="testSURENAME"]');
    const PhoneInput = wrapper.find('[data-testid="testPHONE"]');

    expect(givenNameInput.length).toBe(1);
    expect(sureNameInput.length).toBe(1);
    expect(PhoneInput.length).toBe(1);

    act(() => {
      givenNameInput.simulate("change", { target: { value: "jhon" } });
      sureNameInput.simulate("change", { target: { value: "smith" } });
      PhoneInput.simulate("change", { target: { value: "0245698745" } });
    });

    wrapper.update();

    expect(givenNameInput.instance().value).toBe("Jhon");
    expect(sureNameInput.instance().value).toBe("Smith");
    expect(PhoneInput.instance().value).toBe("02 4569 8745");
  });
});
