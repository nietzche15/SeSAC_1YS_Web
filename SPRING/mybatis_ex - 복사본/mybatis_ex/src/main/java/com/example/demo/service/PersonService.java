package com.example.demo.service;

import com.example.demo.domain.Person;
import com.example.demo.dto.PersonDTO;
import com.example.demo.mapper.PersonMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    PersonMapper personMapper;
    public void insertPerson(PersonDTO personDTO){
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        personMapper.insertPerson(person);
    }

    public PersonDTO getPerson(PersonDTO personDTO){
        Person person = personMapper.getPerson(personDTO.getId(), personDTO.getPw());

        if( person == null ) return null;

        PersonDTO info = new PersonDTO();
        info.setId(person.getId());
        info.setPw(person.getPw());
        info.setName(person.getName());
        info.setNickname(person.getId() + person.getName());

        return info;
    }

    public void updatePerson(PersonDTO personDTO){
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        personMapper.updatePerson(person);
    }

    public void deletePerson(PersonDTO personDTO){
        personMapper.deletePerson(personDTO.getId());
    }
}
