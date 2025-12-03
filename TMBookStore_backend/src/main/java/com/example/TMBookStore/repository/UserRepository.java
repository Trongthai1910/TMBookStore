package com.example.TMBookStore.repository;

import com.example.TMBookStore.entity.User;
import com.example.TMBookStore.entity.enums.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmailAndPasswordAndStatusAndDeletedAtIsNull(String email, String password, UserStatus status);
}
