package com.example.TMBookStore.service;

import com.example.TMBookStore.entity.User;

public interface UserService {
    public User login(String email, String password) throws Exception;
}
