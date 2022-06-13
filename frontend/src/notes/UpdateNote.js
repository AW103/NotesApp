import axios from "axios";
import Button from "react-bootstrap/Button";

const UpdateNote = (noteId, noteBody) => {

    const getNote = async () => {
        const response = await axios.get(`http://locahost:8080/api/v1/notes/${noteId}`);
        let note = response.data;
        console.log(note);       
    } 
    
    const updateBody = async () => {
       const sendBody = await axios.put("http://locahost:8080/api/v1/notes/",{noteBody});
    }

    return (
        <div>
        <Button onClick={getNote} className="btn btn-sm btn-outline-secondary">Edit</Button>
        </div>
    )
}

export default UpdateNote;