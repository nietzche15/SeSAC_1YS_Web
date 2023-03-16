package com.example.demo.controller;

import com.example.demo.domain.Person;
import com.example.demo.dto.PersonDTO;
import com.example.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
// @RestController // personController 안에 있는 모든 함수들에 @ResponseBody가 붙는다.
@RequestMapping("/person") // 이하의 mapping url은 '/person/~'로 mapping된다.
public class PersonController {
    @Autowired
    PersonService personService;
    @GetMapping("/register")
    public String getRegister(){
    return "register";
    // html만 show
    }
    @PostMapping("/register")
    @ResponseBody // 결과 & html return
    public String postRegister(@RequestBody PersonDTO personDTO){
        personService.insertPerson(personDTO);
        return "";
    }

    @GetMapping("/login")
    public String getLogin(){
        return "login";
    }
    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO){
        PersonDTO person = personService.getPerson(personDTO);
        if (person == null ) return false;
        else return true;
    }

    @PostMapping("/userinfo")
    public String postInfo(PersonDTO personDTO, Model model){
        PersonDTO person = personService.getPerson(personDTO);

        model.addAttribute("person", person);
        return "userinfo";
    }

    @PostMapping("/userinfo/edit")
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO){
        personService.updatePerson(personDTO);
        return "";
    }

    @PostMapping("/userinfo/delete")
    @ResponseBody
    public String postInfoDelete(@RequestBody PersonDTO personDTO){
        personService.deletePerson(personDTO);
        return "";
    }
}
