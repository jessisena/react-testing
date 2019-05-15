import React from "react";

import axios from "axios";

import FormContainer from "../FormContainer/FormContainer";
import ListContainer from "../ListContainer/ListContainer";

class CommentsComponent extends React.PureComponent {

    constructor(props) {
        
        super(props);

        this.state = {

            loading: false,
            list: [],
            inputComment: ""

        };

    }

    handleOnChange = (e) => {

        console.log(e.target.value);
        this.setState({inputComment: e.target.value});
    }

    handleAddComment = () => {

        const currentComment = this.state.inputComment;
        const newList = [...this.state.list, currentComment];
        this.setState({inputComment: "", list: newList});

    }

    fetchComments = () => {
        
        this.setState({loading: true});

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(({data}) => {
          console.log(data);
          const newList = [...this.state.list, ...data/* data.map(item => item.body) */]
          this.setState({loading: false, list: newList });
        })
        .catch((error) => {
          console.log(error);
          this.setState({loading: false });
        });     

    }

    renderFetch() {

        if(this.state.loading){
            return(
                <div>Loading...</div>
            );
        }

        return(
            <button className="fetch-comments-btn" onClick={this.fetchComments}>Fetch old comments</button>
        );

    }

    render() {
        return (
            <div>
            {this.renderFetch()}
            <FormContainer inputComment={this.state.inputComment} handleAddComment={this.handleAddComment} handleOnChange={this.handleOnChange}></FormContainer>
            <ListContainer commentsList={this.state.list}></ListContainer>
            </div>
        );
    }

}

export default CommentsComponent;