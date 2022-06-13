import Button from "react-bootstrap/Button";
import { useState } from "react";

const NewNote = ({sendNote}) => {
    const [noteBody, setNoteBody] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        sendNote(noteBody)
    }
    const onInputChange = (e) => {
        setNoteBody(e.target.value);
    }

    const onClickHandler = (e) => {
        setNoteBody("")
    }

   
   return (
   <div className="form-addNote">
   <form onSubmit={onFormSubmit}>
         <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" placeholder="Add text..." value={noteBody} onChange={(onInputChange)}/>
        <label htmlFor="floatingInput">Add text here</label>
      </div>
          <Button type="submit" variant="primary" onClick={onClickHandler}>Add Note</Button>
        </form>
        </div>
   )
}

export default NewNote;
  