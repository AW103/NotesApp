import axios from "axios";
import Button from "react-bootstrap/Button";

const DeleteNote = ({noteId}) => {
    console.log(`DeleteNote is receiving ${noteId}`);

  const handleClick = async () => {
      await axios.delete(`http://localhost:8080/api/v1/notes/${noteId}`);
  } 

   return(
       <div>
    <Button onClick={handleClick} className="btn btn-sm btn-outline-secondary">Delete</Button>
    </div>
   )
}

export default DeleteNote;