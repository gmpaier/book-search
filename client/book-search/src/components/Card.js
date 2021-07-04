import React from "react";
import DeleteBtn from "./DeleteBtn";
import SaveBtn from "./SaveBtn";

function Card(props) {
  const myBtn = function (){
    if (window.location.pathname === "/"){
      return <SaveBtn
                book={{
                  title: props.title,
                  authors: props.authors,
                  about: props.about,
                  image: props.image,
                  link: props.link
                }}
                handleSave={props.handleSave}
              />
    }
    else if (window.location.pathname === "/saved"){
      return <DeleteBtn
                id={props.id}
                handleDelete={props.handleDelete}
                />
    }
  }

  return(
    <div className="card mb-3" style={{"max-width": "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.image} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"><small className="text-muted">By {props.authors}</small></p>
            <p className="card-text">{props.about}</p>
            <a href={props.link} className="d-inline card-link"><small className="text-muted">See on Google Books</small></a>
            {myBtn}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;