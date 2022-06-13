import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import NoteCard from "../notes/NoteCard";
import { Container } from "react-bootstrap";
import AddNote from "../notes/AddNote";

const Home = ({ authenticated, userId }) => {
  console.log(authenticated, userId);
  console.log("userID is typeof: " + typeof userId);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/notes/user/${userId}`
      );
      console.log(`Home response is ${JSON.stringify(response.data)}`);
      if (!response.data) {
        console.log("No data in getNotes");
      } else {
        setNotes(response.data);
      }
    };
    getNotes().catch(console.error);
  }, [authenticated, userId]);

  const noteCards = notes.map((note) => {
    console.log(`mapped note id is ${note.id} and body says ${note.body}`);
    return <NoteCard key={note.id} id={note.id} body={note.body} />;
  });
  let message1 = "Looks like you haven't added any notes...";

  return (
    <main>
      <Container>
        <h1>Welcome Back!</h1>
        {!notes ? (
          <h2>{message1}</h2>
        ) : (
          <div>
            <AddNote userId={userId} />
            {noteCards}
          </div>
        )}
      </Container>
    </main>
  );
};

export default Home;
