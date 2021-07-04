import React from "react";
import Card from "./Card"

function List(props) {
  return (props.clicked === true) ? (
    <div/>
  ) : 
  (
    (props.books.length === 0) ? (
      <h3>No Books Found</h3>
    ) : 
    ( <ul>
      {props.books.map((book) => {
        return(
          <li>
            <Card
              title = {book.title}
              authors = {book.authors}
              about = {book.about}
              image = {book.image}
              link = {book.link}
              handleSave = {props.handleSave}
            />
          </li>
        )
      })}
    </ul>   
    )
  )
}

export default List;