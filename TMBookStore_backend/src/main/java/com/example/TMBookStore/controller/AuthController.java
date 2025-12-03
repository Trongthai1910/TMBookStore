package com.example.TMBookStore.controller;

import com.example.TMBookStore.dto.request.LoginRequest;
import com.example.TMBookStore.entity.User;
import com.example.TMBookStore.mapper.AuthMapper;
import com.example.TMBookStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    UserService service;

    @Autowired
    AuthMapper mapper;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            User user = service.login(request.getEmail(), request.getPassword());
            return ResponseEntity.ok(mapper.toLoginResponse(user));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
