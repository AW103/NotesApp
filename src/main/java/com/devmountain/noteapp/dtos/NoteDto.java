package com.devmountain.noteapp.dtos;


import com.devmountain.noteapp.entities.Note;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteDto {
private Long id;
private String body;
private UserDto userDto;

public NoteDto(Note note) {
    if(note.getId() != null){
        this.id = note.getId();
    }
    if(note.getBody() != null) {
        this.body = note.getBody();
    }
}
}
