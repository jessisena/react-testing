import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import CommentsComponent from "./components/CommentsComponent/CommentsComponent";


describe("App component", () => {

  let wrapped;

  beforeAll(() => {
    wrapped = shallow(<App></App>);
  });

  it('renders h1 title', () => {
    
      expect(wrapped.find("h1").length).toEqual(1);
    
    });

    it('renders CommentsComponent', () => {
    
      expect(wrapped.find(CommentsComponent).length).toEqual(1);
    
    });    


});

/* it('renders h1 title', () => {

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  
    expect(div.innerHTML).toContain("Hi!");
    expect(div.innerHTML).toContain("button");
  
    ReactDOM.unmountComponentAtNode(div);
  
    const wrapped = shallow(<App></App>);
  
    expect(wrapped.find(CommentsComponent).length).toEqual(1);
    expect(wrapped.find("h1").length).toEqual(1);
  
  }); */



/* it('renders title and commentComponent', () => {

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("Hi!");
  expect(div.innerHTML).toContain("button");

  ReactDOM.unmountComponentAtNode(div);

}); */

