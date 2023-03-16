package com.example.demo.mapper;

import com.example.demo.domain.Person;
import org.apache.ibatis.annotations.*;

@Mapper
public interface PersonMapper {
    @Insert("insert into person(id,pw,name) values(#{id}, #{pw}, #{name})")
    void insertPerson(Person person);

    @Select("select * from person where id=#{id} and pw=#{pw} limit 1")
    // limit 1 하지 않으면 arraylist 로 받게 됨 결과가 1개여도
    Person getPerson(String id, String pw);

    @Update("update person set pw=#{pw}, name=#{name} where id=#{id}")
    void updatePerson(Person person);

    @Delete("delete from person where id=#{id}")
    void deletePerson(String id);
}
