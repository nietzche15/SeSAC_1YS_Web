package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
    @GetMapping("/hi")
    public String getHi(Model model){
        model.addAttribute("msg1","Hello");
        model.addAttribute("msg2","Goodbye");
        model.addAttribute("msg3","Welcome!");

        String[] names = {"kim","lee","park","choi","jeong"};
        model.addAttribute("names",names);
        return "hi";
    }
}
