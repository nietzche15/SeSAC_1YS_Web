package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.domain.UserEntity;
import com.example.demo.dto.UserDTO;
import com.example.demo.mapper.MainMapper;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;
    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getUserList(){
        List<UserEntity> result = userRepository.findAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        for(int i = 0; i<result.size();i++){
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
//            user.setPassword(result.get(i).getPassword());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }
    public ArrayList<UserDTO> getUserName(String name){
        List<UserEntity> user = userRepository.findByName(name);
        ArrayList<UserDTO> userList = new ArrayList<UserDTO>();

        if(user.size() > 0) {
            for (int i = 0; i < user.size(); i++) {
                UserDTO dto = new UserDTO();
                dto.setId(user.get(i).getId());
                dto.setNo(i + 1);
                dto.setName(user.get(i).getName());
                dto.setNickname(user.get(i).getNickname());
                userList.add(dto);
            }
        }
        return userList;
    }

//    public ArrayList<UserDTO> getUserName(String name){
//        List<UserEntity> user = userRepository.findByName(name);
//        ArrayList<UserDTO> userList = new ArrayList<UserDTO>();
//
//        if(user.size() > 0){
//            for(int i = 0; i<user.size();i++) {
//                UserDTO dto = new UserDTO();
//                dto.setId(user.get(i).getId());
//                dto.setNo(i + 1);
//                dto.setName(user.get(i).getName());
//                dto.setNickname(user.get(i).getNickname());
//                userList.add(dto);
//            }
//        }
//        return userList;
//    }
    public void addUser(UserEntity user) {userRepository.save(user);}
}
