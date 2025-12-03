package com.example.TMBookStore.mapper;

import com.example.TMBookStore.dto.response.LoginResponse;
import com.example.TMBookStore.entity.User;
import org.springframework.stereotype.Component;

@Component
public class AuthMapper {
    public LoginResponse toLoginResponse(User user) {
        LoginResponse response = new LoginResponse(user.getEmail(),
                user.getFullName(),
                user.getPhoneNumber(),
                user.getAddress());
        return response;
    }
}
