// @flow
import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import App from "../App";


describe("Integration test the app", ()=>{

const dataExample = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  }
];

  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',{
      status: 200,
      response: dataExample
    });
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })


  it("can fetch a list of comments and display them", (done)=>{

    const wrapped = mount(<App></App>);
  
    wrapped.find(".fetch-comments-btn").simulate("click");
  
    moxios.wait(() => {
      console.log("wrapped.find(div.item).length", wrapped.find("div.item").length);
      wrapped.update();
      expect(wrapped.find(".item").length).toEqual(2);
      done();
      wrapped.unmount();
    });
    
  
  });

});

