import React from 'react';
import { shallow, render } from 'enzyme';
import HeadNav from "../../src/components/HeadNav"

describe('(Components) HeadNav', () => {

  const wrapper = shallow(<HeadNav />);
  const navRender = render(<HeadNav />);

  it("should be wrapper is not undefined", () => {
    expect(wrapper).to.not.be.undefined;
  });

  it("should be render navbar", () => {
    expect(navRender.find(".navbar")).to.have.length(1);
  });

  it("should be render navbar contains word `Login`", () => {
    expect(navRender.find("nav").html()).to.be.contains('Login');
  });

  it("should be move login page", () => {
    expect(wrapper.find('[to="/login"]')).to.have.length(1);
  });
});
