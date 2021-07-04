import React from "react";

function SaveBtn(props){
  return(
    <button className="btn btn-info save-btn" value={props.book} onClick={(event) => props.handleSave}>Save</button>
  );
}

export default SaveBtn;