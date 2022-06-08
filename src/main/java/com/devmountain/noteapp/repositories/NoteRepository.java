package com.devmountain.noteapp.repositories;

import com.devmountain.noteapp.entities.Note;
import com.devmountain.noteapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByUserEquals(User user);
}
