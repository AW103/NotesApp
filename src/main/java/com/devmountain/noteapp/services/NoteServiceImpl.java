package com.devmountain.noteapp.services;

import com.devmountain.noteapp.dtos.NoteDto;
import com.devmountain.noteapp.entities.Note;
import com.devmountain.noteapp.entities.User;
import com.devmountain.noteapp.repositories.NoteRepository;
import com.devmountain.noteapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class NoteServiceImpl {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private NoteRepository noteRepository;

    @Transactional
    public void addNote(NoteDto noteDto, Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        Note note = new Note(noteDto);
        userOptional.ifPresent(note::setUser);
        noteRepository.saveAndFlush(note);
    }
}
