//@ flow

import React from "react";

const FormContainer = (props) => {

    const handleOnSubmit = (e) => e.preventDefault(); 

    return <form onSubmit={handleOnSubmit}>
        <input value={props.inputComment} onChange={props.handleOnChange}></input>
        <button type="submit" onClick={props.handleAddComment}>Add</button>
    </form>

}

export default FormContainer;