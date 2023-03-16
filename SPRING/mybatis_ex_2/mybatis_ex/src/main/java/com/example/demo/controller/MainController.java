//package com.example.demo.controller;
//
//import com.example.demo.domain.User;
//import com.example.demo.dto.UserDTO;
//import com.example.demo.service.MainService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import java.util.ArrayList;
//
//@Controller
//public class MainController {
//    @Autowired
//    MainService mainService;
//
//    @GetMapping("/users")
//    public String getUsers(Model model){
//        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
//        model.addAttribute("list", userList);
//                return "user";
//    }
//
//    @GetMapping("/signUp")
//    public String getSignUp(){return "signUp";}
//
//    @PostMapping("/signUp")
//    @ResponseBody
//    public String postSignUp(UserDTO UserDTO, Model model){
//    User user = new User();
//    user.setId(UserDTO.getId());
//    user.setPassword(UserDTO.getPassword());
//    user.setName(UserDTO.getName());
//    user.setNickname(UserDTO.getNickname());
//
//    mainService.addUser(user);
//    model.addAttribute("list",null);
//    return "signIn";
//    }
//
//    @PostMapping("/signIn")
//    public String postSignIn(){
//
//        return "myInfo";
//    }
//
//    @PostMapping("/myInfo")
//    public String postMyInfo(){
//
//        return "myInfo";
//    }
//
//
//
//    @GetMapping("/user/insert")
//    public String getInsertUser(@RequestParam String id,@RequestParam int password,@RequestParam String name, @RequestParam String nickname, Model model){
//        User user = new User();
//        user.setId(id);
//        user.setName(name);
//        user.setNickname(nickname);
//        user.setPassword(password);
//
//        mainService.addUser(user);
//
//        model.addAttribute("list", null);
//        return "user";
//    }
//}
