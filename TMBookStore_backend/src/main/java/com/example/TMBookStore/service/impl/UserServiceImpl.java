package com.example.TMBookStore.service.impl;

import com.example.TMBookStore.entity.User;
import com.example.TMBookStore.entity.enums.UserStatus;
import com.example.TMBookStore.repository.UserRepository;
import com.example.TMBookStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository repo;

    @Override
    public User login(String email, String password) throws Exception {
        User user = repo.findByEmailAndPasswordAndStatusAndDeletedAtIsNull(email, password, UserStatus.ACTIVE)
                .orElseThrow(() -> new Exception("No user found!"));
        return user;
    }
}
