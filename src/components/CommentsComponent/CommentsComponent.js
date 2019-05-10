import React from "react";

import FormContainer from "../FormContainer/FormContainer";
import ListContainer from "../ListContainer/ListContainer";

class CommentsComponent extends React.PureComponent {

    constructor(props) {
        
        super(props);

        this.state = {

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


    render() {
        return (
            <div>
            <FormContainer inputComment={this.state.inputComment} handleAddComment={this.handleAddComment} handleOnChange={this.handleOnChange}></FormContainer>
            <ListContainer commentsList={this.state.list}></ListContainer>
            </div>
        );
    }

}

export default CommentsComponent;