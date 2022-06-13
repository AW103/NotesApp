import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./addNote.css"
import NewNote from "./NewNote";

const AddNote = ({userId}) => {
  const [form, setForm] = useState(false);
    // const [noteTitle, setNoteTitle] = useState("");
    // console.log(`addNote receiving ${userId}`);


    const sendNote = async (noteBody) => {
      await axios.post(`http://localhost:8080/api/v1/notes/user/${userId}`, {body: noteBody});
    } 

    const onClickHandler = () => {
   setForm(true);
    }



    return(
      <aside>
      <div>
        <Button onClick={onClickHandler}>New Note</Button>
        </div>
        {form ? <NewNote sendNote={sendNote}/> : null}
        </aside>
    )
}

export default AddNote;