import React from 'react';
import winston from 'winston';
import { describeWithDOM, mount, spyLifecycle, render } from 'enzyme';
import LoginForm from "../../src/components/LoginForm"

describe('(Components) LoginForm', () => {

  describeWithDOM('Full Render', () => {

    it("should be calls componentDidMount", () => {
      sinon.spy(LoginForm.prototype, 'componentDidMount');
      mount(<LoginForm onLoginHandler={() => ''}/>);
      expect(LoginForm.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('should be click onLoginHandler', () => {
      const onLoginHandler = sinon.spy();
      const wrapper = mount(<LoginForm onLoginHandler={onLoginHandler} />);
      wrapper.find('button').simulate('click');
      expect(onLoginHandler.calledOnce).to.equal(true);
    });

    it('should be render input[username]', () => {
      const wrapper = render(<LoginForm onLoginHandler={() => ''} />);
      expect(wrapper.find('div>input[name="username"]')).to.have.length(1);
    });

    it('should be render input[password]', () => {
      const wrapper = render(<LoginForm onLoginHandler={() => ''} />);
      expect(wrapper.find('div>input[name="password"]')).to.have.length(1);
    });
  });
});
