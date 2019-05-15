import React from "react";
import  { shallow, mount } from "enzyme";
import FormContainer from "./FormContainer";


describe("FormContainer component", () => {

  let wrapped;
  const click = jest.fn();
  const change = jest.fn();

  beforeAll(() => {
    
    wrapped = shallow(<FormContainer handleOnChange={change} handleAddComment={click}></FormContainer>);
  });

  it('renders 1 input', () => {
    
      expect(wrapped.find("input").length).toEqual(1);
    
    });

    it('renders 1 button', () => {
    
      expect(wrapped.find("button").length).toEqual(1);
    
    });

    it('has 1 input that changes', () => {
    
      wrapped.find("input").simulate("change", {target: {value: "Hola"}});
      expect(change).toBeCalled();
      /* wrapped.update();
      expect(
        wrapped.find('input').prop("value")
      ).toEqual('Hola') */
    
    });    

    it('executes onClick', () => {
      
      wrapped.find("button").simulate("click");
      expect(click).toBeCalled();
      
    
    });     

});

/* 
describe("2. FormContainer component", () => {

  let wrapped;

  beforeAll(() => {
    wrapped = mount(<FormContainer></FormContainer>);
  });

  it('renders 1 input', () => {
    
      expect(wrapped.find("input").length).toEqual(1);
    
    });

    it('renders 1 button', () => {
    
      expect(wrapped.find("button").length).toEqual(1);
    
    });

    it('has 1 input that changes', () => {
    
      wrapped.find("input").simulate("change", {target: {value: "Hola"}});
      wrapped.update();
      expect(
        wrapped.find('input').text()
      ).toEqual('Hola')
    
    });      

    afterAll(() => {
      wrapped.unmount();
    });

}); */
