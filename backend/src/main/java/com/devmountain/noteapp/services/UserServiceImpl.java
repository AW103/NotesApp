package com.devmountain.noteapp.services;

import com.devmountain.noteapp.dtos.UserDto;
import com.devmountain.noteapp.entities.User;
import com.devmountain.noteapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public List<String> addUser(UserDto userDto) {
        List<String> response = new ArrayList<>();
        User user = new User(userDto);
        try {
            userRepository.saveAndFlush(user);
            response.add("User successfully added!");
            return response;
        } catch (Exception error) {
            System.out.println(error.getMessage());
            response.add("Error registering user");
            return response;
        }
    }

    @Override
    public List<String> userLogin(UserDto userDto) {
        List<String> response = new ArrayList<>();
        Optional<User> userOptional = userRepository.findByUsername(userDto.getUsername());
       try {
           if (userOptional.isPresent()) {
               if (passwordEncoder.matches(userDto.getPassword(), userOptional.get().getPassword())) {
                   response.add("User successfully logged in!");
                   response.add(String.valueOf(userOptional.get().getId()));
                   response.add(userOptional.get().getUsername() + " has been logged in.");
               } else {
                   response.add("Error");
                   response.add("Username or password incorrect");
               }
           } else {
               response.add("Error");
               response.add("Uh oh...error with logging user in.");
           }
           return response;
       } catch (Exception error) {
           System.out.println(error.getMessage());
           response.add("Error");
           return response;
       }
    }

}
