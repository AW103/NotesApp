package com.devmountain.noteapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
@SpringBootApplication
public class NoteAppApplication {


	public static void main(String[] args) {
		SpringApplication.run(NoteAppApplication.class, args);
	}

}
