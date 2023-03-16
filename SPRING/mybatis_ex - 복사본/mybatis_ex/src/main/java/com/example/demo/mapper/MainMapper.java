package com.example.demo.mapper;

import com.example.demo.domain.User;
import com.example.demo.dto.UserDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MainMapper {
    // mapper 참고하기
    List<User> retrieveAll();

    // mapper 참고 안 하기
    @Insert("insert into user(name,nickname) values(#{name},#{nickname}")
    void insertUser(User user);

//    @Select("select * from user where id=(#{id})")
//    UserDTO selectUser(String id);
}
