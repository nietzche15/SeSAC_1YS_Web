package com.example.demo.repository;

import com.example.demo.domain.UserEntity;
import com.example.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    List<UserEntity> findByName(String name);
//    Optional<UserEntity> findByName(String name);

//    Optional<UserEntity> findById(int id);
//    Optional<UserEntity> findByName(int id, String name);

}
