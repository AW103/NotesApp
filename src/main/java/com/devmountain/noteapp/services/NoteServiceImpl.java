package com.devmountain.noteapp.services;

import com.devmountain.noteapp.dtos.NoteDto;
import com.devmountain.noteapp.entities.Note;
import com.devmountain.noteapp.entities.User;
import com.devmountain.noteapp.repositories.NoteRepository;
import com.devmountain.noteapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    @Transactional
    public void deleteNote(Long noteId) {
        Optional<Note> noteOptional = noteRepository.findById(noteId);
        noteOptional.ifPresent(note -> noteRepository.delete(note));
    }

    @Transactional
    public void updateNoteById(NoteDto noteDto) {
        Optional<Note> noteOptional = noteRepository.findById(noteDto.getId());
        noteOptional.ifPresent(note -> {
            note.setBody(noteDto.getBody());
            noteRepository.saveAndFlush(note);
        });
    }

    public List<NoteDto> getAllNotesByUserId(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()){
            List<Note> noteList = noteRepository.findAllByUserEquals(userOptional.get());
            return noteList.stream().map(note -> new NoteDto(note)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    public Optional<NoteDto> getNoteById(Long noteId) {
        Optional<Note> noteOptional = noteRepository.findById(noteId);
        if(noteOptional.isPresent()) {
            return Optional.of(new NoteDto(noteOptional.get()));
        }
        return Optional.empty();
    }
}
