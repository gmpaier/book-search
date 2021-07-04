import React from "react";
import "./style.css";


function DeleteBtn(props) {
    return(
      <button className="btn btn-warning delete-btn" value={props.id} onClick={(event) => props.handleDelete}>Remove</button>
    );
}

export default DeleteBtn;
 