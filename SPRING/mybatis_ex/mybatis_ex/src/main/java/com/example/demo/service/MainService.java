package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.dto.UserDTO;
import com.example.demo.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;

    public List<UserDTO> getUserList(){
        List<User> result = mainMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        for(int i = 0; i<result.size();i++){
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setPassword(result.get(i).getPassword());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }
    public void addUser(User user) {mainMapper.insertUser(user);}

    public UserDTO getUser(String id){
        UserDTO result = mainMapper.selectUser(id);
        UserDTO user = new UserDTO();

        user.setId(result.getId());
        user.setPassword(result.getPassword());
        user.setName(result.getName());
        user.setNickname(result.getNickname());
        user.setNo(1);

        return user;
    }
}
