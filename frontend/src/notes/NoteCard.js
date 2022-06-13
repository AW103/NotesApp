import React from "react";
import DeleteNote from "./DeleteNote";
import UpdateNote from "./UpdateNote";

const NoteCard = ({id, body}) => {
console.log(`NoteCard is receving ${id} and ${body}`);


   return (
    <div className="col">
    <div className="card shadow-sm">
      <div className="card-body">
            <p className="card-text">{body}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
          <UpdateNote noteId={id} noteBody={body} />
            <DeleteNote noteId={id}/>
          </div>
        </div>
      </div>
    </div>
  </div>
   )
}

export default NoteCard;
