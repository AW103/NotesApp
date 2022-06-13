package com.devmountain.noteapp.controllers;


import com.devmountain.noteapp.dtos.NoteDto;
import com.devmountain.noteapp.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/notes")
public class NoteController {
    @Autowired
    private NoteService noteService;

    @GetMapping("/user/{userId}")
    public List<NoteDto> getNotesByUser(@PathVariable Long userId){
        return noteService.getAllNotesByUserId(userId);
    }

    @PostMapping("/user/{userId}")
        public void addNote(@RequestBody NoteDto noteDto, @PathVariable Long userId) {
            noteService.addNote(noteDto, userId);
        }

    @DeleteMapping("/{noteId}")
    public void deleteNoteById(@PathVariable Long noteId) {
        noteService.deleteNote(noteId);
    }

    @PutMapping
    public void updateNote(@RequestBody NoteDto noteDto) {
    noteService.updateNoteById(noteDto);
    }

    @GetMapping("/{noteId}")
    public Optional<NoteDto> getNoteById(@PathVariable Long noteId){
    return noteService.getNoteById(noteId);
    }
}
